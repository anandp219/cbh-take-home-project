const crypto = require("crypto");

const MAX_PARTITION_KEY_LENGTH = 256;
const TRIVIAL_PARTITION_KEY = "0";

const getHashForString = (rawkey) => {
  return crypto.createHash("sha3-512").update(rawkey).digest("hex");
}

const deterministicPartitionKey = (event) => {
  let candidateKey; // Candidate Key for partition

  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  if (event.partitionKey) {
    candidateKey = event.partitionKey;
  } else {
    candidateKey = getHashForString(JSON.stringify(event));
  }

  if (typeof candidateKey !== "string") {
    candidateKey = JSON.stringify(candidateKey);
  }

  if (candidateKey.length > MAX_PARTITION_KEY_LENGTH) {
    candidateKey = getHashForString(candidateKey);
  }
  
  return candidateKey;
};

exports.getHashForString = getHashForString;
exports.deterministicPartitionKey = deterministicPartitionKey;
exports.MAX_PARTITION_KEY_LENGTH = MAX_PARTITION_KEY_LENGTH;
