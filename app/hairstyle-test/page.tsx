'use client';

import { useEffect, useRef } from 'react';

export default function HairstyleTest() {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    const loadEditor = async () => {
      try {
        // Initialize the editor when component mounts
        const script = document.createElement('script');
        script.src = 'https://cdn.lightx.io/sdk/lightx-editor.js';
        script.async = true;
        
        // Create a promise to wait for script load
        const scriptLoadPromise = new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });

        document.body.appendChild(script);
        await scriptLoadPromise;

        // Wait a bit to ensure LightXEditor is available
        setTimeout(() => {
          // @ts-ignore - LightX is loaded globally
          if (window.LightXEditor) {
            // @ts-ignore
            editorRef.current = new window.LightXEditor({
              container: 'editor-container',
              apiKey: '9bcecb28d3724756beba968fad93a829_daa77740c9e54ff6933d65471a3453fb_andoraitools',
              tools: ['ai-hairstyle'],
              height: '600px',
              width: '100%',
              showToolbar: true,
              showUploadButton: true,
              language: 'en',
              onReady: () => {
                console.log('Editor is ready');
              },
              onError: (error: any) => {
                console.error('Editor error:', error);
              }
            });
          } else {
            console.error('LightXEditor not found');
          }
        }, 1000);
      } catch (error) {
        console.error('Error loading editor:', error);
      }
    };

    loadEditor();

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
      const scriptElement = document.querySelector('script[src="https://cdn.lightx.io/sdk/lightx-editor.js"]');
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  const handleFileUpload = () => {
    // Create a file input element
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && editorRef.current) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageData = event.target?.result as string;
          editorRef.current.loadImage(imageData);
        };
        reader.readAsDataURL(file);
      }
    };

    input.click();
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">AI Hairstyle Editor Test</h1>
      <div 
        id="editor-container" 
        style={{ minHeight: '600px' }}
        className="w-full border border-gray-300 rounded-lg"
      />
      <div className="mt-4">
        <button 
          onClick={handleFileUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload Image
        </button>
      </div>
      <p className="mt-4 text-gray-600">
        Upload an image and use the AI hairstyle tool to test different hairstyles.
      </p>
    </main>
  );
} 