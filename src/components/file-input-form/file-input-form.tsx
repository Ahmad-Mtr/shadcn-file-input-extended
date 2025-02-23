import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Switch,
} from "../ui";
import { FileInput } from "../file-input";
import { useState } from "react";

const Fileinputform = () => {
  const [showDropzone, setShowDropzone] = useState(true);

  const formSchema = z.object({
    file: z
      .union([
        z.array(z.instanceof(File)).min(1, "At least one file is required"),
        z.instanceof(File),
      ])
      .nullable(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: null,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow"
      >
        <div className="flex items-center justify-between border p-3 rounded-lg bg-white dark:bg-gray-800">
          <div>
            <FormLabel className="text-lg font-medium">Use Dropzone?</FormLabel>
            <FormDescription>
              Toggle between drag & drop or traditional file input.
            </FormDescription>
          </div>
          <Switch checked={showDropzone} onCheckedChange={setShowDropzone} />
        </div>

        {/* File Input Field */}
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Select Files</FormLabel>
              <FormControl>
                <FileInput
                  field={field}
                  multiple={false}
                  showDropzone={showDropzone}
                />
              </FormControl>
              <FormDescription>
                {showDropzone
                  ? "Drag & drop files into the dropzone."
                  : "Click to select files."}
              </FormDescription>
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
};

export default Fileinputform;
