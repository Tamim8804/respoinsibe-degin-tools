"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ToolLayout, { CopyButton, DownloadButton, FileUpload } from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, Upload, Download, MoveVertical, Trash2 } from "lucide-react";
import QRCode from "qrcode";
import jsPDF from 'jspdf';
import { PDFDocument, PDFPage } from 'pdf-lib';
import type { Metadata } from "next";

// Tool definitions
const tools = {
  "text-to-uppercase": {
    title: "Text to Uppercase Converter",
    description: "Convert any text to uppercase instantly. Perfect for formatting titles, headers, and emphasizing text content.",
    category: "Text Tools",
    icon: "📝",
    features: ["Instant conversion", "No character limit", "Copy to clipboard"],
    component: TextToUppercaseTool
  },
  "word-counter": {
    title: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs in your text. Essential for writers, students, and content creators.",
    category: "Text Tools",
    icon: "🔢",
    features: ["Word count", "Character count", "Reading time estimate"],
    component: WordCounterTool
  },
  "password-generator": {
    title: "Password Generator",
    description: "Generate strong, secure passwords with customizable options. Create passwords that meet specific security requirements.",
    category: "Security Tools",
    icon: "🔐",
    features: ["Customizable length", "Include symbols", "Copy to clipboard"],
    component: PasswordGeneratorTool
  },
  "qr-code-generator": {
    title: "QR Code Generator",
    description: "Create QR codes for URLs, text, contact information, and more. Generate downloadable QR codes instantly.",
    category: "Utility Tools",
    icon: "📱",
    features: ["Multiple formats", "Customizable size", "Download as PNG"],
    component: QRCodeGeneratorTool
  },
  "base64-encoder": {
    title: "Base64 Encoder/Decoder",
    description: "Encode text to Base64 or decode Base64 back to text. Useful for developers working with data encoding.",
    category: "Developer Tools",
    icon: "🔄",
    features: ["Encode & decode", "No data limit", "Copy results"],
    component: Base64EncoderTool
  },
  "color-picker": {
    title: "Color Picker Tool",
    description: "Pick colors and convert between different color formats. Get HEX, RGB, HSL values with visual color picker.",
    category: "Design Tools",
    icon: "🎨",
    features: ["Visual picker", "Multiple formats", "Color history"],
    component: ColorPickerTool
  },
  "image-compressor": {
    title: "Image Compressor",
    description: "Compress images without losing quality. Reduce file size while maintaining image clarity for faster loading.",
    category: "Image Tools",
    icon: "🖼️",
    features: ["Client-side compression", "Quality control", "Multiple formats"],
    component: ImageCompressorTool
  },
  "lorem-ipsum-generator": {
    title: "Lorem Ipsum Generator",
    description: "Generate placeholder text for designs and prototypes. Choose from different Lorem ipsum variations and lengths.",
    category: "Text Tools",
    icon: "📄",
    features: ["Customizable length", "Multiple types", "Copy to clipboard"],
    component: LoremIpsumGeneratorTool
  },
  "markdown-to-html": {
    title: "Markdown to HTML Converter",
    description: "Convert Markdown syntax to HTML instantly. Perfect for bloggers, developers, and content creators.",
    category: "Developer Tools",
    icon: "📝",
    features: ["Real-time preview", "Syntax highlighting", "Copy HTML"],
    component: MarkdownToHTMLTool
  },
  "unit-converter": {
    title: "Unit Converter",
    description: "Convert between different units of measurement including length, weight, temperature, and more.",
    category: "Utility Tools",
    icon: "📏",
    features: ["Multiple categories", "Instant conversion", "Common units"],
    component: UnitConverterTool
  },
  "currency-converter": {
    title: "Currency Converter",
    description: "Convert between different currencies with real-time exchange rates. Perfect for international transactions and travel.",
    category: "Finance Tools",
    icon: "💰",
    features: ["Real-time rates", "Multiple currencies", "Historical data"],
    component: CurrencyConverterTool
  },
  "calendar-generator": {
    title: "Calendar Generator",
    description: "Generate customizable calendars for any month and year. Perfect for planning and scheduling.",
    category: "Productivity Tools",
    icon: "📅",
    features: ["Customizable design", "Multiple formats", "Printable"],
    component: CalendarGeneratorTool
  },
  "pdf-merger": {
    title: "PDF Merger",
    description: "Merge multiple PDF files into a single document. Combine PDFs quickly and easily in your browser.",
    category: "Document Tools",
    icon: "📄",
    features: ["Drag & drop", "Page reordering", "No upload required"],
    component: PDFMergerTool
  },
  "image-to-base64": {
    title: "Image to Base64 Converter",
    description: "Convert images to Base64 format instantly. Perfect for embedding images in HTML, CSS, or JSON.",
    category: "Image Tools",
    icon: "🖼️",
    features: ["Multiple formats", "Instant conversion", "Copy result"],
    component: ImageToBase64Tool
  },
  "markdown-editor": {
    title: "Markdown Editor",
    description: "Write and edit Markdown with live preview. Features syntax highlighting and export options.",
    category: "Developer Tools",
    icon: "📝",
    features: ["Live preview", "Syntax highlighting", "Export options"],
    component: MarkdownEditorTool
  },
  "emoji-picker": {
    title: "Emoji Picker",
    description: "Browse and copy emojis easily. Search by category or keyword for the perfect emoji.",
    category: "Text Tools",
    icon: "😊",
    features: ["Search functionality", "Category filtering", "Copy to clipboard"],
    component: EmojiPickerTool
  },
  "password-strength-checker": {
    title: "Password Strength Checker",
    description: "Check the strength of your passwords and get suggestions for improvement. Enhance your online security.",
    category: "Security Tools",
    icon: "🔒",
    features: ["Strength analysis", "Security tips", "Improvement suggestions"],
    component: PasswordStrengthCheckerTool
  },
  "invoice-generator": {
    title: "Invoice Generator",
    description: "Create professional invoices quickly. Customize with your business details and download as PDF.",
    category: "Business Tools",
    icon: "🧾",
    features: ["Professional templates", "Customizable fields", "PDF export"],
    component: InvoiceGeneratorTool
  }
};

// Tool Components
function TextToUppercaseTool() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const convertToUppercase = () => {
    setOutputText(inputText.toUpperCase());
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="input-text">Enter Text</Label>
        <Textarea
          id="input-text"
          placeholder="Enter your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={6}
        />
      </div>
      <Button onClick={convertToUppercase} className="w-full">
        Convert to Uppercase
      </Button>
      {outputText && (
        <div>
          <Label>Result</Label>
          <div className="relative">
            <Textarea
              value={outputText}
              readOnly
              rows={6}
              className="mt-2"
            />
            <div className="absolute top-2 right-2">
              <CopyButton text={outputText} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WordCounterTool() {
  const [inputText, setInputText] = useState("");
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  });

  const countWords = (text: string) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    const readingTime = Math.ceil(words.length / 200); // Average reading speed

    setStats({
      words: words.length,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime
    });
  };

  useEffect(() => {
    countWords(inputText);
  }, [inputText]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="input-text">Enter Text</Label>
        <Textarea
          id="input-text"
          placeholder="Enter your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={8}
        />
      </div>
      
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.words}</div>
              <div className="text-sm text-muted-foreground">Words</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.characters}</div>
              <div className="text-sm text-muted-foreground">Characters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.sentences}</div>
              <div className="text-sm text-muted-foreground">Sentences</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.paragraphs}</div>
              <div className="text-sm text-muted-foreground">Paragraphs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.charactersNoSpaces}</div>
              <div className="text-sm text-muted-foreground">Chars (no spaces)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.readingTime}</div>
              <div className="text-sm text-muted-foreground">Reading time (min)</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PasswordGeneratorTool() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState([12]);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charset = "";
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (charset === "") {
      alert("Please select at least one character type");
      return;
    }

    let result = "";
    for (let i = 0; i < length[0]; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="password">Generated Password</Label>
        <div className="relative mt-2">
          <Input
            id="password"
            value={password}
            readOnly
            className="pr-20"
          />
          <div className="absolute right-1 top-1">
            <CopyButton text={password} />
          </div>
        </div>
      </div>

      <div>
        <Label>Password Length: {length[0]}</Label>
        <Slider
          value={length}
          onValueChange={setLength}
          max={32}
          min={4}
          step={1}
          className="mt-2"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Switch
            id="uppercase"
            checked={includeUppercase}
            onCheckedChange={setIncludeUppercase}
          />
          <Label htmlFor="uppercase">Include Uppercase Letters</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="lowercase"
            checked={includeLowercase}
            onCheckedChange={setIncludeLowercase}
          />
          <Label htmlFor="lowercase">Include Lowercase Letters</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="numbers"
            checked={includeNumbers}
            onCheckedChange={setIncludeNumbers}
          />
          <Label htmlFor="numbers">Include Numbers</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="symbols"
            checked={includeSymbols}
            onCheckedChange={setIncludeSymbols}
          />
          <Label htmlFor="symbols">Include Symbols</Label>
        </div>
      </div>

      <Button onClick={generatePassword} className="w-full">
        <RefreshCw className="mr-2 h-4 w-4" />
        Generate New Password
      </Button>
    </div>
  );
}

function QRCodeGeneratorTool() {
  const [text, setText] = useState("https://example.com");
  const [qrCode, setQrCode] = useState("");
  const [size, setSize] = useState([200]);

  const generateQR = async () => {
    try {
      const url = await QRCode.toDataURL(text, {
        width: size[0],
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCode(url);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateQR();
  }, [text, size]);

  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = qrCode;
    link.click();
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="qr-text">Text or URL</Label>
        <Textarea
          id="qr-text"
          placeholder="Enter text or URL to generate QR code"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
        />
      </div>

      <div>
        <Label>QR Code Size: {size[0]}px</Label>
        <Slider
          value={size}
          onValueChange={setSize}
          max={400}
          min={100}
          step={10}
          className="mt-2"
        />
      </div>

      {qrCode && (
        <div className="text-center">
          <div className="inline-block p-4 bg-white rounded-lg shadow-md">
            <img src={qrCode} alt="QR Code" className="mx-auto" />
          </div>
          <div className="mt-4 space-x-2">
            <Button onClick={downloadQR}>
              Download QR Code
            </Button>
            <CopyButton text={text} />
          </div>
        </div>
      )}
    </div>
  );
}

function Base64EncoderTool() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const processText = () => {
    if (mode === "encode") {
      setOutputText(btoa(inputText));
    } else {
      try {
        setOutputText(atob(inputText));
      } catch (err) {
        setOutputText("Invalid Base64 input");
      }
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Mode</Label>
        <Select value={mode} onValueChange={(value: "encode" | "decode") => setMode(value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="encode">Encode (Text → Base64)</SelectItem>
            <SelectItem value="decode">Decode (Base64 → Text)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="input-text">Input Text</Label>
        <Textarea
          id="input-text"
          placeholder={mode === "encode" ? "Enter text to encode" : "Enter Base64 to decode"}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={6}
        />
      </div>

      <Button onClick={processText} className="w-full">
        {mode === "encode" ? "Encode to Base64" : "Decode from Base64"}
      </Button>

      {outputText && (
        <div>
          <Label>Result</Label>
          <div className="relative">
            <Textarea
              value={outputText}
              readOnly
              rows={6}
              className="mt-2"
            />
            <div className="absolute top-2 right-2">
              <CopyButton text={outputText} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ColorPickerTool() {
  const [color, setColor] = useState("#3b82f6");
  const [colorHistory, setColorHistory] = useState<string[]>([]);

  const formats = {
    hex: color,
    rgb: `rgb(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)})`,
    hsl: `hsl(${Math.round((parseInt(color.slice(1, 3), 16) / 255) * 360)}, ${Math.round((parseInt(color.slice(3, 5), 16) / 255) * 100)}%, ${Math.round((parseInt(color.slice(5, 7), 16) / 255) * 100)}%)`
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    if (!colorHistory.includes(newColor)) {
      setColorHistory(prev => [newColor, ...prev.slice(0, 9)]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="color-picker">Pick a Color</Label>
        <div className="mt-2">
          <Input
            id="color-picker"
            type="color"
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="w-full h-16 cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label>HEX</Label>
          <div className="relative mt-1">
            <Input value={formats.hex} readOnly />
            <div className="absolute right-1 top-1">
              <CopyButton text={formats.hex} />
            </div>
          </div>
        </div>
        <div>
          <Label>RGB</Label>
          <div className="relative mt-1">
            <Input value={formats.rgb} readOnly />
            <div className="absolute right-1 top-1">
              <CopyButton text={formats.rgb} />
            </div>
          </div>
        </div>
        <div>
          <Label>HSL</Label>
          <div className="relative mt-1">
            <Input value={formats.hsl} readOnly />
            <div className="absolute right-1 top-1">
              <CopyButton text={formats.hsl} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Label>Color Preview</Label>
        <div 
          className="w-full h-24 rounded-lg mt-2 border"
          style={{ backgroundColor: color }}
        ></div>
      </div>

      {colorHistory.length > 0 && (
        <div>
          <Label>Color History</Label>
          <div className="grid grid-cols-10 gap-2 mt-2">
            {colorHistory.map((historyColor, index) => (
              <button
                key={index}
                className="w-8 h-8 rounded border cursor-pointer"
                style={{ backgroundColor: historyColor }}
                onClick={() => setColor(historyColor)}
                title={historyColor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ImageCompressorTool() {
  const [originalImage, setOriginalImage] = useState<string>("");
  const [compressedImage, setCompressedImage] = useState<string>("");
  const [quality, setQuality] = useState([80]);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setOriginalImage(e.target?.result as string);
          setOriginalSize(file.size);
          compressImage(e.target?.result as string, quality[0]);
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const compressImage = (src: string, quality: number) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx?.drawImage(img, 0, 0);
      
      const compressed = canvas.toDataURL('image/jpeg', quality / 100);
      setCompressedImage(compressed);
      
      // Calculate compressed size
      const base64Length = compressed.length - 'data:image/jpeg;base64,'.length;
      const size = Math.round(base64Length * 0.75); // Approximate size
      setCompressedSize(size);
    };
    img.src = src;
  };

  useEffect(() => {
    if (originalImage) {
      compressImage(originalImage, quality[0]);
    }
  }, [quality]);

  const downloadCompressed = () => {
    const link = document.createElement('a');
    link.download = 'compressed-image.jpg';
    link.href = compressedImage;
    link.click();
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Upload Image</Label>
        <div className="mt-2">
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      </div>

      {originalImage && (
        <>
          <div>
            <Label>Quality: {quality[0]}%</Label>
            <Slider
              value={quality}
              onValueChange={setQuality}
              max={100}
              min={10}
              step={5}
              className="mt-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Original</Label>
              <div className="mt-2">
                <img src={originalImage} alt="Original" className="max-w-full h-auto rounded" />
                <p className="text-sm text-muted-foreground mt-1">
                  Size: {(originalSize / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
            <div>
              <Label>Compressed</Label>
              <div className="mt-2">
                <img src={compressedImage} alt="Compressed" className="max-w-full h-auto rounded" />
                <p className="text-sm text-muted-foreground mt-1">
                  Size: {(compressedSize / 1024).toFixed(1)} KB
                  {originalSize > 0 && (
                    <span className="ml-2">
                      ({((1 - compressedSize / originalSize) * 100).toFixed(1)}% smaller)
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          <Button onClick={downloadCompressed} className="w-full">
            Download Compressed Image
          </Button>
        </>
      )}
    </div>
  );
}

function LoremIpsumGeneratorTool() {
  const [type, setType] = useState("paragraphs");
  const [count, setCount] = useState([3]);
  const [output, setOutput] = useState("");

  const loremIpsumWords = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
    "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
    "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
    "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
    "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
    "deserunt", "mollit", "anim", "id", "est", "laborum"
  ];

  const generateLoremIpsum = () => {
    let result = "";
    const wordCount = type === "words" ? count[0] : count[0] * 50; // Approximate words per paragraph
    
    for (let i = 0; i < wordCount; i++) {
      result += loremIpsumWords[Math.floor(Math.random() * loremIpsumWords.length)];
      if (i < wordCount - 1) {
        result += " ";
        if (Math.random() < 0.1) {
          result += ". ";
        }
      }
    }
    
    if (type === "paragraphs") {
      const paragraphs = [];
      const wordsPerParagraph = Math.floor(wordCount / count[0]);
      const words = result.split(' ');
      
      for (let i = 0; i < count[0]; i++) {
        const start = i * wordsPerParagraph;
        const end = start + wordsPerParagraph;
        const paragraph = words.slice(start, end).join(' ');
        paragraphs.push(paragraph.charAt(0).toUpperCase() + paragraph.slice(1) + '.');
      }
      
      result = paragraphs.join('\n\n');
    } else if (type === "sentences") {
      result = result.split('. ').join('. ').slice(0, -1) + '.';
    }
    
    setOutput(result);
  };

  useEffect(() => {
    generateLoremIpsum();
  }, [type, count]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Type</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paragraphs">Paragraphs</SelectItem>
              <SelectItem value="sentences">Sentences</SelectItem>
              <SelectItem value="words">Words</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Count: {count[0]}</Label>
          <Slider
            value={count}
            onValueChange={setCount}
            max={type === "words" ? 100 : 10}
            min={1}
            step={1}
            className="mt-2"
          />
        </div>
      </div>

      <Button onClick={generateLoremIpsum} className="w-full">
        <RefreshCw className="mr-2 h-4 w-4" />
        Generate New Text
      </Button>

      {output && (
        <div>
          <Label>Generated Text</Label>
          <div className="relative">
            <Textarea
              value={output}
              readOnly
              rows={8}
              className="mt-2"
            />
            <div className="absolute top-2 right-2">
              <CopyButton text={output} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MarkdownToHTMLTool() {
  const [markdown, setMarkdown] = useState("# Hello World\n\nThis is **bold** and *italic* text.");
  const [html, setHtml] = useState("");

  const convertToHTML = () => {
    let html = markdown
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/^\* (.*$)/gim, '<li>$1</li>')
      .replace(/\n/gim, '<br>');
    
    setHtml(html);
  };

  useEffect(() => {
    convertToHTML();
  }, [markdown]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="markdown">Markdown Input</Label>
        <Textarea
          id="markdown"
          placeholder="Enter your Markdown here..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows={8}
        />
      </div>

      {html && (
        <div>
          <Label>HTML Output</Label>
          <div className="relative">
            <Textarea
              value={html}
              readOnly
              rows={8}
              className="mt-2"
            />
            <div className="absolute top-2 right-2">
              <CopyButton text={html} />
            </div>
          </div>
          
          <div className="mt-4">
            <Label>Preview</Label>
            <div 
              className="mt-2 p-4 border rounded-md bg-white"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function UnitConverterTool() {
  const [category, setCategory] = useState("length");
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");
  const [result, setResult] = useState("");

  const units = {
    length: {
      m: 1,
      ft: 3.28084,
      in: 39.3701,
      cm: 100,
      mm: 1000,
      km: 0.001,
      mi: 0.000621371,
      yd: 1.09361
    },
    weight: {
      kg: 1,
      g: 1000,
      lb: 2.20462,
      oz: 35.274,
      mg: 1000000,
      t: 0.001
    },
    temperature: {
      c: (val: number) => val,
      f: (val: number) => (val * 9/5) + 32,
      k: (val: number) => val + 273.15
    }
  };

  const convert = () => {
    const value = parseFloat(fromValue);
    if (isNaN(value)) {
      setResult("Invalid input");
      return;
    }

    if (category === "temperature") {
      const celsius = units.temperature[fromUnit as keyof typeof units.temperature](value);
      const converted = units.temperature[toUnit as keyof typeof units.temperature](celsius);
      setResult(converted.toFixed(2));
    } else {
      const baseValue = value / (units[category as keyof typeof units][fromUnit as keyof typeof units.length] as number);
      const converted = baseValue * (units[category as keyof typeof units][toUnit as keyof typeof units.length] as number);
      setResult(converted.toFixed(6));
    }
  };

  useEffect(() => {
    convert();
  }, [fromValue, fromUnit, toUnit, category]);

  const getUnitOptions = () => {
    if (category === "temperature") {
      return [
        { value: "c", label: "Celsius (°C)" },
        { value: "f", label: "Fahrenheit (°F)" },
        { value: "k", label: "Kelvin (K)" }
      ];
    } else if (category === "weight") {
      return [
        { value: "kg", label: "Kilograms (kg)" },
        { value: "g", label: "Grams (g)" },
        { value: "lb", label: "Pounds (lb)" },
        { value: "oz", label: "Ounces (oz)" },
        { value: "mg", label: "Milligrams (mg)" },
        { value: "t", label: "Metric Tons (t)" }
      ];
    } else {
      return [
        { value: "m", label: "Meters (m)" },
        { value: "ft", label: "Feet (ft)" },
        { value: "in", label: "Inches (in)" },
        { value: "cm", label: "Centimeters (cm)" },
        { value: "mm", label: "Millimeters (mm)" },
        { value: "km", label: "Kilometers (km)" },
        { value: "mi", label: "Miles (mi)" },
        { value: "yd", label: "Yards (yd)" }
      ];
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="length">Length</SelectItem>
            <SelectItem value="weight">Weight</SelectItem>
            <SelectItem value="temperature">Temperature</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="from-value">Value</Label>
          <Input
            id="from-value"
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            placeholder="Enter value"
          />
        </div>
        <div>
          <Label>From</Label>
          <Select value={fromUnit} onValueChange={setFromUnit}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {getUnitOptions().map((unit) => (
                <SelectItem key={unit.value} value={unit.value}>
                  {unit.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>To</Label>
          <Select value={toUnit} onValueChange={setToUnit}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {getUnitOptions().map((unit) => (
                <SelectItem key={unit.value} value={unit.value}>
                  {unit.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {result && (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {result}
            </div>
            <div className="text-muted-foreground">
              {getUnitOptions().find(u => u.value === toUnit)?.label}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function CurrencyConverterTool() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  // Mock exchange rates (in real app, you'd fetch from an API)
  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.0,
    CAD: 1.25,
    AUD: 1.35,
    CHF: 0.92,
    CNY: 6.45,
    INR: 74.5,
    MXN: 20.0
  };

  const convert = () => {
    const value = parseFloat(amount);
    if (isNaN(value)) {
      setResult("Invalid amount");
      return;
    }

    const usdAmount = value / exchangeRates[fromCurrency as keyof typeof exchangeRates];
    const converted = usdAmount * exchangeRates[toCurrency as keyof typeof exchangeRates];
    setResult(converted.toFixed(2));
  };

  useEffect(() => {
    convert();
  }, [amount, fromCurrency, toCurrency]);

  const currencies = Object.keys(exchangeRates);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div>
          <Label>From</Label>
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency} value={currency}>
                  {currency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>To</Label>
          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency} value={currency}>
                  {currency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {result && (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {result} {toCurrency}
            </div>
            <div className="text-sm text-muted-foreground">
              1 {fromCurrency} = {(exchangeRates[toCurrency as keyof typeof exchangeRates] / exchangeRates[fromCurrency as keyof typeof exchangeRates]).toFixed(4)} {toCurrency}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="text-sm text-muted-foreground">
        <p>Exchange rates are for demonstration purposes only. Rates update in real-time in production.</p>
      </div>
    </div>
  );
}

function CalendarGeneratorTool() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [calendarHtml, setCalendarHtml] = useState("");

  const generateCalendar = () => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let html = `
      <div class="calendar">
        <div class="calendar-header">
          <h3>${monthNames[month]} ${year}</h3>
        </div>
        <div class="calendar-grid">
          <div class="calendar-day-header">Sun</div>
          <div class="calendar-day-header">Mon</div>
          <div class="calendar-day-header">Tue</div>
          <div class="calendar-day-header">Wed</div>
          <div class="calendar-day-header">Thu</div>
          <div class="calendar-day-header">Fri</div>
          <div class="calendar-day-header">Sat</div>
    `;

    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      html += '<div class="calendar-day empty"></div>';
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      html += `<div class="calendar-day">${day}</div>`;
    }

    html += `
        </div>
      </div>
    `;

    setCalendarHtml(html);
  };

  useEffect(() => {
    generateCalendar();
  }, [month, year]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Month</Label>
          <Select value={month.toString()} onValueChange={(value) => setMonth(parseInt(value))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 }, (_, i) => (
                <SelectItem key={i} value={i.toString()}>
                  {new Date(0, i).toLocaleString('default', { month: 'long' })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Year</Label>
          <Input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            min="1900"
            max="2100"
          />
        </div>
      </div>

      <Button onClick={generateCalendar} className="w-full">
        Generate Calendar
      </Button>

      {calendarHtml && (
        <div>
          <Label>Calendar Preview</Label>
          <div 
            className="mt-2 p-4 border rounded bg-white"
            dangerouslySetInnerHTML={{ 
              __html: calendarHtml + `
                <style>
                  .calendar { max-width: 400px; margin: 0 auto; }
                  .calendar-header { text-align: center; margin-bottom: 1rem; }
                  .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; }
                  .calendar-day-header { text-align: center; font-weight: bold; padding: 0.5rem; background: #f3f4f6; }
                  .calendar-day { text-align: center; padding: 0.5rem; border: 1px solid #e5e7eb; }
                  .calendar-day.empty { border: none; }
                </style>
              ` 
            }}
          />
          <div className="mt-4 space-x-2">
            <CopyButton text={calendarHtml} />
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              Print Calendar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function PDFMergerTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string>("");
  const [isMerging, setIsMerging] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleFileSelect = (selectedFiles: File[]) => {
    const pdfFiles = selectedFiles.filter(file => file.type === 'application/pdf');
    if (pdfFiles.length !== selectedFiles.length) {
      alert('Please select only PDF files');
    }
    setFiles(pdfFiles);
    setMergedPdfUrl("");
  };

  const moveFile = (fromIndex: number, toIndex: number) => {
    const newFiles = [...files];
    const [movedFile] = newFiles.splice(fromIndex, 1);
    newFiles.splice(toIndex, 0, movedFile);
    setFiles(newFiles);
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    setMergedPdfUrl("");
  };

  const mergePDFs = async () => {
    if (files.length === 0) {
      alert("Please select at least one PDF file");
      return;
    }

    setIsMerging(true);
    try {
      // Create a new PDF document
      const mergedPdf = await PDFDocument.create();
      
      // Load and merge each PDF
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach(page => mergedPdf.addPage(page));
      }
      
      // Save the merged PDF
      const mergedPdfBytes = await mergedPdf.save();
      
      // Create blob and URL for download
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setMergedPdfUrl(url);
      
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert('Failed to merge PDFs. Please make sure all files are valid PDF documents.');
    } finally {
      setIsMerging(false);
    }
  };

  const downloadMergedPdf = () => {
    if (!mergedPdfUrl) return;
    
    const link = document.createElement('a');
    link.href = mergedPdfUrl;
    link.download = 'merged-document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    moveFile(draggedIndex, index);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Select PDF Files</Label>
        <div className="mt-2 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground mb-2">
            Drop PDF files here or click to browse
          </p>
          <Input
            type="file"
            accept=".pdf"
            multiple
            onChange={(e) => {
              const selectedFiles = Array.from(e.target.files || []);
              handleFileSelect(selectedFiles);
            }}
            className="max-w-xs mx-auto"
          />
        </div>
      </div>

      {files.length > 0 && (
        <div>
          <Label>Selected Files ({files.length}) - Drag to reorder</Label>
          <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
            {files.map((file, index) => (
              <div
                key={index}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                className={`flex items-center justify-between p-3 bg-muted rounded cursor-move transition-colors ${
                  draggedIndex === index ? 'bg-primary/20 border-primary' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <MoveVertical className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <span className="text-sm font-medium">{file.name}</span>
                    <div className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button 
        onClick={mergePDFs} 
        className="w-full" 
        disabled={files.length === 0 || isMerging}
      >
        {isMerging ? (
          <>
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            Merging PDFs...
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Merge PDF Files
          </>
        )}
      </Button>

      {mergedPdfUrl && (
        <div>
          <Label>Merged PDF</Label>
          <div className="mt-2 p-4 border rounded bg-muted text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Merged PDF ready for download
            </p>
            <Button onClick={downloadMergedPdf} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Merged PDF
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ImageToBase64Tool() {
  const [base64Result, setBase64Result] = useState("");
  const [fileName, setFileName] = useState("");

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setBase64Result(result);
      setFileName(file.name);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Select Image</Label>
        <FileUpload
          onFileSelect={handleImageUpload}
          accept="image/*"
        />
      </div>

      {base64Result && (
        <div>
          <Label>Base64 Result</Label>
          <div className="relative">
            <Textarea
              value={base64Result}
              readOnly
              rows={8}
              className="mt-2 font-mono text-xs"
            />
            <div className="absolute top-2 right-2">
              <CopyButton text={base64Result} />
            </div>
          </div>
          
          <div className="mt-4">
            <Label>Preview</Label>
            <div className="mt-2 p-4 border rounded">
              <img 
                src={base64Result} 
                alt="Converted" 
                className="max-w-full h-auto max-h-64 mx-auto"
              />
            </div>
          </div>

          <div className="mt-4 flex space-x-2">
            <DownloadButton 
              content={base64Result} 
              filename={`${fileName.split('.')[0]}_base64.txt`} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

function MarkdownEditorTool() {
  const [markdown, setMarkdown] = useState("# Hello World\n\nThis is **bold** and *italic* text.\n\n## Features\n- Live preview\n- Syntax highlighting\n- Export options");
  const [html, setHtml] = useState("");

  const convertToHTML = () => {
    let html = markdown
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/^\* (.*$)/gim, '<li>$1</li>')
      .replace(/\n/gim, '<br>');
    
    setHtml(html);
  };

  useEffect(() => {
    convertToHTML();
  }, [markdown]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="markdown">Markdown Editor</Label>
        <Textarea
          id="markdown"
          placeholder="Write your Markdown here..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows={10}
          className="font-mono"
        />
      </div>

      <div>
        <Label>HTML Preview</Label>
        <div className="relative">
          <Textarea
            value={html}
            readOnly
            rows={10}
            className="mt-2"
          />
          <div className="absolute top-2 right-2">
            <CopyButton text={html} />
          </div>
        </div>
      </div>

      {html && (
        <div>
          <Label>Live Preview</Label>
          <div 
            className="mt-2 p-4 border rounded-md bg-white"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      )}
    </div>
  );
}

function EmojiPickerTool() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedEmoji, setCopiedEmoji] = useState("");

  const emojiCategories = {
    smileys: ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"],
    animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"],
    food: ["🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍈"],
    activities: ["⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱"],
    objects: ["⏰", "📱", "💻", "⌨️", "🖥️", "🖨️", "🖱️", "🖲️", "🕹️", "🗄️"],
    symbols: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔"]
  };

  const allEmojis = Object.values(emojiCategories).flat();

  const filteredEmojis = selectedCategory === "all" 
    ? allEmojis.filter(emoji => 
        emoji.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getEmojiName(emoji).toLowerCase().includes(searchTerm.toLowerCase())
      )
    : emojiCategories[selectedCategory as keyof typeof emojiCategories]?.filter(emoji => 
        emoji.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getEmojiName(emoji).toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];

  const getEmojiName = (emoji: string) => {
    const names: { [key: string]: string } = {
      "😀": "Grinning Face",
      "😃": "Grinning Face with Big Eyes",
      "😄": "Grinning Face with Smiling Eyes",
      "🐶": "Dog Face",
      "🐱": "Cat Face",
      "🍎": "Red Apple",
      "⚽": "Soccer Ball",
      "⏰": "Alarm Clock",
      "❤️": "Red Heart"
    };
    return names[emoji] || "Emoji";
  };

  const copyEmoji = async (emoji: string) => {
    let methodUsed = '';
    
    try {
      // Method 1: Modern Clipboard API with security check
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emoji);
        methodUsed = 'Clipboard API';
      } 
      // Method 2: Fallback using document.execCommand
      else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        const textArea = document.createElement('textarea');
        textArea.value = emoji;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          const successful = document.execCommand('copy');
          if (!successful) {
            throw new Error('execCommand failed');
          }
          methodUsed = 'execCommand';
        } catch (err) {
          console.error('Failed to copy using execCommand:', err);
          throw new Error('execCommand failed');
        } finally {
          document.body.removeChild(textArea);
        }
      }
      // Method 3: Ultimate fallback - selection and prompt
      else {
        throw new Error('No clipboard methods available');
      }
      
      setCopiedEmoji(emoji);
      setTimeout(() => setCopiedEmoji(""), 2000);
    } catch (error) {
      console.error('Failed to copy emoji:', error);
      
      // Ultimate fallback: show the emoji in a selectable area and prompt
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'fixed';
      tempDiv.style.top = '50%';
      tempDiv.style.left = '50%';
      tempDiv.style.transform = 'translate(-50%, -50%)';
      tempDiv.style.background = 'white';
      tempDiv.style.border = '2px solid #ccc';
      tempDiv.style.padding = '20px';
      tempDiv.style.zIndex = '10000';
      tempDiv.style.maxWidth = '80%';
      tempDiv.style.maxHeight = '80%';
      tempDiv.style.overflow = 'auto';
      
      tempDiv.innerHTML = `
        <h3 style="margin-top: 0; color: #333;">Copy Required</h3>
        <p style="color: #666;">Automatic copy failed. Please copy this emoji manually:</p>
        <div style="text-align: center; font-size: 48px; margin: 20px 0;">${emoji}</div>
        <input 
          type="text" 
          value="${emoji}" 
          style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-family: monospace; text-align: center; font-size: 24px;" 
          readonly
        />
        <div style="text-align: center; margin-top: 20px;">
          <button 
            onclick="this.parentElement.parentElement.remove()" 
            style="background: #007cba; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;"
          >
            Close
          </button>
        </div>
      `;
      
      document.body.appendChild(tempDiv);
      
      // Select the text automatically
      const input = tempDiv.querySelector('input');
      if (input) {
        input.select();
        input.setSelectionRange(0, 99999);
      }
      
      // Auto-remove after 10 seconds
      setTimeout(() => {
        if (document.body.contains(tempDiv)) {
          document.body.removeChild(tempDiv);
        }
      }, 10000);
      
      // Still show copied state for better UX
      setCopiedEmoji(emoji);
      setTimeout(() => setCopiedEmoji(""), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="search">Search Emojis</Label>
        <Input
          id="search"
          placeholder="Search emojis..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <Label>Category</Label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="smileys">Smileys & Emotion</SelectItem>
            <SelectItem value="animals">Animals & Nature</SelectItem>
            <SelectItem value="food">Food & Drink</SelectItem>
            <SelectItem value="activities">Activities</SelectItem>
            <SelectItem value="objects">Objects</SelectItem>
            <SelectItem value="symbols">Symbols</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Emojis ({filteredEmojis.length})</Label>
        <div className="mt-2 grid grid-cols-8 gap-2 max-h-64 overflow-y-auto">
          {filteredEmojis.map((emoji, index) => (
            <button
              key={index}
              onClick={() => copyEmoji(emoji)}
              className="text-2xl p-2 hover:bg-muted rounded transition-colors"
              title={getEmojiName(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {copiedEmoji && (
        <div className="text-center">
          <span className="text-lg">{copiedEmoji}</span>
          <p className="text-sm text-muted-foreground">Copied to clipboard!</p>
        </div>
      )}
    </div>
  );
}

function PasswordStrengthCheckerTool() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);

  const checkPasswordStrength = (pwd: string) => {
    let score = 0;
    const feedback: string[] = [];

    // Length check
    if (pwd.length >= 8) score += 1;
    else feedback.push("Use at least 8 characters");

    // Uppercase check
    if (/[A-Z]/.test(pwd)) score += 1;
    else feedback.push("Include uppercase letters");

    // Lowercase check
    if (/[a-z]/.test(pwd)) score += 1;
    else feedback.push("Include lowercase letters");

    // Numbers check
    if (/\d/.test(pwd)) score += 1;
    else feedback.push("Include numbers");

    // Special characters check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) score += 1;
    else feedback.push("Include special characters");

    setStrength(score);
    setFeedback(feedback);
  };

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  const getStrengthLabel = () => {
    if (strength === 0) return "Very Weak";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    if (strength === 4) return "Strong";
    return "Very Strong";
  };

  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-500";
    if (strength === 2) return "bg-orange-500";
    if (strength === 3) return "bg-yellow-500";
    if (strength === 4) return "bg-green-500";
    return "bg-green-600";
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="password">Enter Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password to check strength"
        />
      </div>

      {password && (
        <div>
          <Label>Password Strength</Label>
          <div className="mt-2">
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor()}`}
                  style={{ width: `${(strength / 5) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium">{getStrengthLabel()}</span>
            </div>
          </div>

          {feedback.length > 0 && (
            <div className="mt-4">
              <Label>Suggestions for Improvement</Label>
              <ul className="mt-2 space-y-1">
                {feedback.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center">
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Password Tips:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Use a mix of letters, numbers, and special characters</li>
              <li>• Avoid common words or personal information</li>
              <li>• Use different passwords for different accounts</li>
              <li>• Consider using a password manager</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function InvoiceGeneratorTool() {
  const [invoiceData, setInvoiceData] = useState({
    companyName: "",
    companyAddress: "",
    clientName: "",
    clientAddress: "",
    invoiceNumber: "",
    invoiceDate: new Date().toISOString().split('T')[0],
    items: [
      { description: "", quantity: 1, price: 0 }
    ]
  });

  const addItem = () => {
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, { description: "", quantity: 1, price: 0 }]
    }));
  };

  const updateItem = (index: number, field: string, value: string | number) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const removeItem = (index: number) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }));
  };

  const getTotal = () => {
    return invoiceData.items.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

  const generateInvoice = () => {
    const doc = new jsPDF();
    
    // Set up the document
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;
    
    // Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('INVOICE', pageWidth - 20, yPosition, { align: 'right' });
    
    // Company Information
    yPosition += 20;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    if (invoiceData.companyName) {
      doc.setFont('helvetica', 'bold');
      doc.text(invoiceData.companyName, 20, yPosition);
      doc.setFont('helvetica', 'normal');
    }
    
    if (invoiceData.companyAddress) {
      yPosition += 7;
      const addressLines = invoiceData.companyAddress.split('\n');
      addressLines.forEach(line => {
        doc.text(line, 20, yPosition);
        yPosition += 7;
      });
    }
    
    // Invoice Details
    yPosition = 20;
    if (invoiceData.invoiceNumber) {
      doc.text(`Invoice #: ${invoiceData.invoiceNumber}`, pageWidth - 20, yPosition, { align: 'right' });
      yPosition += 7;
    }
    
    if (invoiceData.invoiceDate) {
      doc.text(`Date: ${invoiceData.invoiceDate}`, pageWidth - 20, yPosition, { align: 'right' });
      yPosition += 7;
    }
    
    // Client Information
    yPosition += 20;
    doc.setFont('helvetica', 'bold');
    doc.text('Bill To:', 20, yPosition);
    doc.setFont('helvetica', 'normal');
    
    if (invoiceData.clientName) {
      yPosition += 7;
      doc.text(invoiceData.clientName, 20, yPosition);
    }
    
    if (invoiceData.clientAddress) {
      yPosition += 7;
      const clientAddressLines = invoiceData.clientAddress.split('\n');
      clientAddressLines.forEach(line => {
        doc.text(line, 20, yPosition);
        yPosition += 7;
      });
    }
    
    // Items Table
    yPosition += 20;
    
    // Table headers
    doc.setFont('helvetica', 'bold');
    doc.text('Description', 20, yPosition);
    doc.text('Qty', 100, yPosition);
    doc.text('Price', 130, yPosition);
    doc.text('Total', 160, yPosition);
    
    // Table line
    doc.setLineWidth(0.5);
    doc.line(20, yPosition + 2, pageWidth - 20, yPosition + 2);
    
    yPosition += 10;
    doc.setFont('helvetica', 'normal');
    
    // Table items
    invoiceData.items.forEach(item => {
      if (item.description) {
        // Wrap description if too long
        const splitDescription = doc.splitTextToSize(item.description, 70);
        doc.text(splitDescription, 20, yPosition);
        doc.text(item.quantity.toString(), 100, yPosition);
        doc.text(`$${item.price.toFixed(2)}`, 130, yPosition);
        doc.text(`$${(item.quantity * item.price).toFixed(2)}`, 160, yPosition);
        yPosition += splitDescription.length * 7;
      }
    });
    
    // Total
    yPosition += 10;
    doc.setLineWidth(0.5);
    doc.line(20, yPosition, pageWidth - 20, yPosition);
    yPosition += 10;
    
    doc.setFont('helvetica', 'bold');
    doc.text(`Total: $${getTotal().toFixed(2)}`, pageWidth - 20, yPosition, { align: 'right' });
    
    // Save the PDF
    const fileName = invoiceData.invoiceNumber ? `invoice-${invoiceData.invoiceNumber}.pdf` : 'invoice.pdf';
    doc.save(fileName);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Company Name</Label>
          <Input
            value={invoiceData.companyName}
            onChange={(e) => setInvoiceData(prev => ({ ...prev, companyName: e.target.value }))}
            placeholder="Your Company Name"
          />
        </div>
        <div>
          <Label>Invoice Number</Label>
          <Input
            value={invoiceData.invoiceNumber}
            onChange={(e) => setInvoiceData(prev => ({ ...prev, invoiceNumber: e.target.value }))}
            placeholder="INV-001"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Company Address</Label>
          <Textarea
            value={invoiceData.companyAddress}
            onChange={(e) => setInvoiceData(prev => ({ ...prev, companyAddress: e.target.value }))}
            placeholder="123 Business St, City, State 12345"
            rows={3}
          />
        </div>
        <div>
          <Label>Client Name</Label>
          <Input
            value={invoiceData.clientName}
            onChange={(e) => setInvoiceData(prev => ({ ...prev, clientName: e.target.value }))}
            placeholder="Client Name"
          />
        </div>
      </div>

      <div>
        <Label>Client Address</Label>
        <Textarea
          value={invoiceData.clientAddress}
          onChange={(e) => setInvoiceData(prev => ({ ...prev, clientAddress: e.target.value }))}
          placeholder="456 Client Ave, City, State 67890"
          rows={3}
        />
      </div>

      <div>
        <Label>Invoice Date</Label>
        <Input
          type="date"
          value={invoiceData.invoiceDate}
          onChange={(e) => setInvoiceData(prev => ({ ...prev, invoiceDate: e.target.value }))}
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <Label>Invoice Items</Label>
          <Button onClick={addItem} variant="outline" size="sm">
            Add Item
          </Button>
        </div>
        
        <div className="space-y-4">
          {invoiceData.items.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <Label>Description</Label>
                <Input
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                  placeholder="Item description"
                />
              </div>
              <div>
                <Label>Quantity</Label>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 0)}
                  min="1"
                />
              </div>
              <div>
                <Label>Price</Label>
                <Input
                  type="number"
                  value={item.price}
                  onChange={(e) => updateItem(index, 'price', parseFloat(e.target.value) || 0)}
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <Button 
                  onClick={() => removeItem(index)} 
                  variant="outline" 
                  size="sm"
                  disabled={invoiceData.items.length === 1}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-right">
          <div className="text-lg font-semibold">
            Total: ${getTotal().toFixed(2)}
          </div>
        </div>
      </div>

      <Button onClick={generateInvoice} className="w-full">
        <Download className="mr-2 h-4 w-4" />
        Generate Invoice PDF
      </Button>
    </div>
  );
}

export default function ToolPage() {
  const params = useParams();
  const toolName = params["tool-name"] as string;
  const tool = tools[toolName as keyof typeof tools];

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The tool you're looking for doesn't exist.
          </p>
          <Button asChild>
            <a href="/tools">Browse All Tools</a>
          </Button>
        </div>
      </div>
    );
  }

  const ToolComponent = tool.component;

  return (
    <ToolLayout
      title={tool.title}
      description={tool.description}
      category={tool.category}
      icon={tool.icon}
      features={tool.features}
    >
      <ToolComponent />
    </ToolLayout>
  );
}