import { MessageCircle } from "lucide-react";

export default function StickyWhatsApp() {
  const phoneNumber = "918069165906"; // country code + number
  const message = encodeURIComponent(
    "Hi, I’m interested in this tour. Please share more details.",
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        bg-[#25D366] text-white
        px-5 py-3 rounded-full
        shadow-[0_15px_40px_rgba(0,0,0,0.25)]
        hover:scale-105 transition-transform
      "
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:block font-semibold">WhatsApp</span>
    </a>
  );
}
