"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { FileInput } from "@/components/file-input";
import { toast } from "sonner";

const formSchema = z.object({
  files: z
    .union([z.instanceof(File), z.array(z.instanceof(File))])
    .optional()
    .nullable(),
});

type FormData = z.infer<typeof formSchema>;

function FileInputForm() {
  const [showDropzone, setShowDropzone] = useState(true);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      files: [],
    },
  });

  function onSubmit(data: FormData) {
    if (!data.files) {
      toast.error("No files selected. Please choose a file.");
      return;
    }

    let fileNames: string;
    let fileCount: number;

    if (Array.isArray(data.files)) {
      fileNames = data.files.map((file) => file.name).join(", ");
      fileCount = data.files.length;
    } else {
      fileNames = data.files.name;
      fileCount = 1;
    }

    toast.info(`Selected ${fileCount} file(s): ${fileNames}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center justify-between border p-3 rounded-lg">
          <div>
            <FormLabel className="text-lg font-medium">Use Dropzone?</FormLabel>
            <FormDescription>
              Toggle between drag & drop or traditional file input.
            </FormDescription>
          </div>
          <Switch checked={showDropzone} onCheckedChange={setShowDropzone} />
        </div>

        <FormField
          control={form.control}
          name="files"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Files</FormLabel>
              <FormControl>
                <FileInput
                  field={field}
                  accept="image/png, image/jpg"
                  multiple={true}
                  showDropzone={showDropzone}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default FileInputForm;
