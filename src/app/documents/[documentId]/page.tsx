import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPageProps = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[rgb(250,251,253)]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPageProps;
