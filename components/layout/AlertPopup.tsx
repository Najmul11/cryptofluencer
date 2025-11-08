"use client";
import { IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const AlertPopup = () => {
  const [showAlert, setShowAlert] = useState(false);

  // === Show Crypto Safety Alert on first visit ===
  useEffect(() => {
    const shown = localStorage.getItem("shownAlert");
    if (!shown || shown === "false") {
      setShowAlert(true);
    }
  }, []);

  const handleCloseAlert = () => {
    localStorage.setItem("shownAlert", "true");
    setShowAlert(false);
  };
  return (
    <div>
      {/* ====== ALERT POPUP ====== */}
      {showAlert && (
        <div className="fixed inset-0 z-[12000] flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
          <div className="bg-[#f5f5f5]/10 border border-midnightblue rounded-2xl p-6 w-[90%] max-w-md text-white shadow-xl relative">
            <h2 className="text-lg font-bold mb-2 text-brand">
              ⚠️ Crypto Safety Reminder
            </h2>
            <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
              <li>
                Never share your{" "}
                <span className="font-semibold">seed phrase</span> or private
                keys.
              </li>
              <li>Beware of fake airdrops and phishing links.</li>
              <li>
                Always double-check the website URL before connecting your
                wallet.
              </li>
            </ul>
            <button
              onClick={handleCloseAlert}
              className="absolute top-2 right-3 text-gray-400 hover:text-brand text-xl"
            >
              <IconX />
            </button>
            <button
              onClick={handleCloseAlert}
              className="w-full bg-brand hover:bg-brand/80 text-white font-medium py-2 rounded-md transition"
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertPopup;
