import random
import string

chars = " " + string.punctuation + string.digits + string.ascii_letters
chars = list(chars)

key = chars.copy()
random.shuffle(key)

# Encrypt
plain_text = input(f"enter a message to encrypt: ")
cipher_text = " "

for letter in plain_text:
    index = chars.index(letter)
    cipher_text += key[index]

print()
print(f"Og message: {plain_text}")
print(f"Encrypted message: {cipher_text}")

# Decrypted
cipher_text = input("enter a message to decrypt: ")
plain_text = " "

for letter in cipher_text:
    index = key.index(letter)
    plain_text += chars[index]

print()
print(f"Encrypted message: {cipher_text}")
print(f"Decrypted message: {plain_text}")

