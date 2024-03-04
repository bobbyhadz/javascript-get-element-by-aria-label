console.log('bobbyhadz.com');

// ✅ Get first element with aria-label = "Close"
const element = document.querySelector('[aria-label="Close"]');
console.log(element); // 👉️ button

// ✅ Get all elements with aria-label = "Close"
const elements = document.querySelectorAll(
  '[aria-label="Close"]',
);
console.log(elements); // 👉️ [button]
