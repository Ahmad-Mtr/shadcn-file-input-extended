
# ShadCN File Input  

A modern, customizable file input component built with ShadCN and react-hook-form, featuring drag-and-drop support and a sleek UI.

## 🚀 Features  

- 📂 **Drag & Drop File Upload**  
- 🎨 **Fully Themed with ShadCN UI**  
- 🔥 **Supports Single & Multiple File Selection**  
- 🌙 **Dark Mode Compatible**  
- ✨ **Animated and Accessible**  

## 📸 Preview  

![ShadCN File Input Demo](/example/public/demo.jpeg)  

## 🛠 Installation  

```sh
npx shadcn@latest add https://shadcn-file-input-extended.vercel.app/file-input.json
```  

## 🔧 Usage  

```tsx
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
          showDropzone={true} // Optional
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```  

## 🤝 Contributing  

💡 **Contributions Welcome!** Feel free to open issues or submit PRs.  

📬 **Have questions?** Reach out via [email](mailto:vikramsamak02@gmail.com).

Made with ❤️ using [shadcn/ui](https://ui.shadcn.com)  
