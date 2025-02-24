'use client';
import { Code } from '@/components/code';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import Header from '@/components/header';
import FileInputForm from '@/components/file-input-form';
import { fileInputCode } from '../constants/file-input-form-code';

export default function Home() {
  const [activeTab, setActiveTab] = useState('preview');
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>ShadCN File Input</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex gap-2 justify-start">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <FileInputForm />
              </TabsContent>
              <TabsContent value="code">
                <Code code={fileInputCode} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
