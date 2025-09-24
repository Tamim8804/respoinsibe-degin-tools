import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, RefreshCw, Upload, Eye } from "lucide-react";
import { useState } from "react";

interface ToolLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  category: string;
  icon: string;
  features: string[];
}

export default function ToolLayout({ 
  children, 
  title, 
  description, 
  category, 
  icon, 
  features 
}: ToolLayoutProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    let methodUsed = '';
    
    try {
      // Method 1: Modern Clipboard API with security check
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        methodUsed = 'Clipboard API';
      } 
      // Method 2: Fallback using document.execCommand
      else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
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
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
      
      // Ultimate fallback: show the text in a selectable area and prompt
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
        <p style="color: #666;">Automatic copy failed. Please copy the text manually:</p>
        <textarea 
          style="width: 100%; height: 100px; margin: 10px 0; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-family: monospace;" 
          readonly
        >${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
        <div style="text-align: center;">
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
      const textarea = tempDiv.querySelector('textarea');
      if (textarea) {
        textarea.select();
        textarea.setSelectionRange(0, 99999);
      }
      
      // Auto-remove after 10 seconds
      setTimeout(() => {
        if (document.body.contains(tempDiv)) {
          document.body.removeChild(tempDiv);
        }
      }, 10000);
      
      // Still show copied state for better UX
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-4xl">{icon}</span>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-4xl font-bold">{title}</h1>
                <Badge variant="secondary" className="text-sm">
                  {category}
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">{description}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tool Interface */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tool Interface</CardTitle>
                  <CardDescription>
                    Use the tool below - all processing happens in your browser
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {children}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA for Ads */}
              <Card className="bg-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    Advertisement
                  </div>
                  <div className="h-32 bg-muted rounded flex items-center justify-center">
                    <span className="text-muted-foreground">Ad Space</span>
                  </div>
                </CardContent>
              </Card>

              {/* How to Use */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="text-sm space-y-2 list-decimal list-inside text-muted-foreground">
                    <li>Enter your content in the input field</li>
                    <li>Configure any available options</li>
                    <li>Click the process button</li>
                    <li>Copy or download your results</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pro Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• All data is processed locally</li>
                    <li>• No registration required</li>
                    <li>• Works offline after first visit</li>
                    <li>• Unlimited usage</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need More Tools?</h3>
              <p className="text-muted-foreground mb-6">
                Explore our collection of 10+ free online tools for developers, designers, and content creators.
              </p>
              <Button size="lg" asChild>
                <a href="/tools">
                  Browse All Tools
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Common utility components for tools
export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const [copyMethod, setCopyMethod] = useState<string>('');

  const handleCopy = async () => {
    let methodUsed = '';
    
    try {
      // Method 1: Modern Clipboard API with security check
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        methodUsed = 'Clipboard API';
      } 
      // Method 2: Fallback using document.execCommand
      else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
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
      
      setCopyMethod(methodUsed);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setCopyMethod('');
      }, 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
      
      // Ultimate fallback: show the text in a selectable area and prompt
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
        <p style="color: #666;">Automatic copy failed. Please copy the text manually:</p>
        <textarea 
          style="width: 100%; height: 100px; margin: 10px 0; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-family: monospace;" 
          readonly
        >${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
        <div style="text-align: center;">
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
      const textarea = tempDiv.querySelector('textarea');
      if (textarea) {
        textarea.select();
        textarea.setSelectionRange(0, 99999);
      }
      
      // Auto-remove after 10 seconds
      setTimeout(() => {
        if (document.body.contains(tempDiv)) {
          document.body.removeChild(tempDiv);
        }
      }, 10000);
      
      // Still show copied state for better UX
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="flex items-center space-x-2"
      title={copyMethod ? `Copied using ${copyMethod}` : 'Copy to clipboard'}
    >
      {copied ? (
        <>
          <Eye className="h-4 w-4" />
          <span>{copyMethod ? 'Copied!' : 'Copied'}</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span>Copy</span>
        </>
      )}
    </Button>
  );
}

export function DownloadButton({ content, filename }: { content: string; filename: string }) {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Button variant="outline" size="sm" onClick={handleDownload}>
      <Download className="h-4 w-4 mr-2" />
      Download
    </Button>
  );
}

export function FileUpload({ onFileSelect, accept = "*" }: { 
  onFileSelect: (file: File) => void; 
  accept?: string; 
}) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
      <p className="text-sm text-muted-foreground mb-2">
        Drop your file here or click to browse
      </p>
      <Input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="max-w-xs mx-auto"
      />
    </div>
  );
}