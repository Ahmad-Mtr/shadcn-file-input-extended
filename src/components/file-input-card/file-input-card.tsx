import { Fileinputform } from "../file-input-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui";
import { Separator } from "../ui/separator";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Info } from "lucide-react";

const FileInputCard = () => {
  return (
    <Card className="w-full max-w-2xl shadow-lg border rounded-xl p-6">
      {/* Header */}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold">
          Test the File Input Component
        </CardTitle>
        <CardDescription className="text-gray-500">
          Try uploading files using the drag & drop or traditional input below.
        </CardDescription>
      </CardHeader>

      <Separator className="my-4" />

      {/* File Input Form */}
      <CardContent>
        <Fileinputform />
      </CardContent>

      {/* Info Alert */}
      <div className="mt-4">
        <Alert className="border-l-4 border-primary bg-primary/10 p-3 flex items-start gap-3">
          <Info className="w-5 h-5 text-primary" />
          <div>
            <AlertTitle className="text-primary font-semibold">
              How to Use
            </AlertTitle>
            <AlertDescription className="text-muted-foreground">
              You can drag & drop files into the dropzone or use the file input
              button to select files.
            </AlertDescription>
          </div>
        </Alert>
      </div>
    </Card>
  );
};

export default FileInputCard;
