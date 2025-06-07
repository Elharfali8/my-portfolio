import { useState } from "react";
import { Check, Copy, Mail, Phone } from "lucide-react"; // or use your own SVGs

const CopyToClipboard = ({ text, mail }: { text: string, mail:boolean }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-xl w-fit">
      <span className="text-sm md:text-base text-gray-700 dark:text-gray-200 flex items-center gap-x-2">
        {mail ? <Mail /> : <Phone />}
        {text}
        </span>
      <button
        onClick={handleCopy}
        className="text-gray-500 hover:text-black dark:hover:text-white cursor-pointer"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default CopyToClipboard;
