"use client";
import { Code } from "@/components/Code";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("preview");
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
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
              <p>FileInputForm</p>
            </TabsContent>
            <TabsContent value="code">
              <Code
                code={`
\`\`\`ts {4} showLineNumbers
const add = (a: number, b: number): number => a + b;
\`\`\`
`}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Button className="mt-6">View on GitHub</Button>
    </main>
  );
}
