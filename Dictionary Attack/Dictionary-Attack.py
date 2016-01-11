import hashlib, sys
m = hashlib.md5()
hash1 = ""
hash_file = input("What is the file name in which the hash resides?  ")
wordlist = input("What is your wordlist?  (Enter the file name)  ")
try:
        hashdocument = open(hash_file,"r")
except IOError:
        print("Invalid file.")
        raw_input()
        sys.exit()
else:
        hash1 = hashdocument.readline()
        hash1 = hash1.replace("\n","")
    
try:
        wordlistfile = open(wordlist,"r",encoding='utf-8')
except IOError:
        print("Invalid file.")
        raw_input()
        sys.exit()
else:
        pass
for line in wordlistfile:
        m = hashlib.md5()
        line = line.replace("\n","")
        line = "user462:Boutique Cassee:" + line
        m.update(line.encode(wordlistfile.encoding))
        word_hash = m.hexdigest()
        if word_hash==hash1:
                print("Collision!  The word corresponding to the given hash is", line)
                input()
                sys.exit()

print("The hash given does not correspond to any supplied word in the wordlist.")
input()
sys.exit()
