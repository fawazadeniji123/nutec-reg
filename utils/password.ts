// Configuration
const ITERATIONS = 100000;
const KEY_LENGTH = 64;
const DIGEST = "SHA-512";

export async function saltAndHashPassword(password: string) {
  const salt = crypto.getRandomValues(new Uint8Array(16)); // Edge-compatible random salt
  const encodedPassword = new TextEncoder().encode(password);

  // Derive the key using PBKDF2
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encodedPassword,
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );

  const hashBuffer = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: ITERATIONS,
      hash: DIGEST,
    },
    keyMaterial,
    KEY_LENGTH * 8
  );

  // Convert salt and hash to hex strings
  const saltHex = Array.from(salt)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const hashHex = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Return in "salt:hash" format
  return `${saltHex}:${hashHex}`;
}

export async function verifyPassword(
  storedPassword: string,
  passwordAttempt: string
) {
  const [saltHex, storedHashHex] = storedPassword.split(":");
  const salt = Uint8Array.from(
    saltHex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))!
  );
  const encodedPasswordAttempt = new TextEncoder().encode(passwordAttempt);

  // Derive the hash for the attempted password
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encodedPasswordAttempt,
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );

  const hashBuffer = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: ITERATIONS,
      hash: DIGEST,
    },
    keyMaterial,
    KEY_LENGTH * 8
  );

  // Convert derived hash to hex and compare with stored hash
  const hashHex = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex === storedHashHex;
}
