export const fileInputCode = `
\`\`\`tsx
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
          />
        </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
\`\`\`
`;
