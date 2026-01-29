import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 30 }, // warm-up
    { duration: "30s", target: 60 }, // medium load
    { duration: "1m", target: 120 }, // 🔥 peak load
    { duration: "30s", target: 0 }, // cool down
  ],
};

export default function () {
  // Home
  http.get("http://localhost:5173/");

  // Gallery page
  http.get("http://localhost:5173/gallery");

  // Packages page
  http.get("http://localhost:5173/packages/trek");

  http.get("http://localhost:5173/trek/kuari-pass-trek");

  sleep(1.5); // human-like delay
}
