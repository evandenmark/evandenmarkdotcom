#run this after a new file is added

import os


import_strings = []
short_audio_list = []
full_audio_list = []
os.remove("data.tsx")

for short_file in os.listdir("short"):
    filetype = short_file.split(".")[1]
    filename = short_file.split(".")[0].replace("&", "WITH")
    speaker = " & ".join([name.capitalize() for name in filename.split("_")[0].split("WITH")])
    topic = " ".join(filename.split("_")[1:])
    path = "./short/"+short_file

    if filetype == "mp3":
        import_strings.append(f"import {filename} from '{path}'\n")

        obj_string = " { speaker: '"+speaker+ "', topic: '"+ topic+ "', link:"+filename+"},\n"
        short_audio_list.append(obj_string)

for full_file in os.listdir("full"):
    filetype = full_file.split(".")[1]
    filename = full_file.split(".")[0]
    speaker = filename.split("_")[0].capitalize()
    date = " ".join(x.capitalize() for x in filename.split("_")[1:])
    path = "./full/"+full_file

    if filetype == "mp3":
        import_strings.append(f"import {filename} from '{path}'\n")

        obj_string = " { speaker: '"+speaker+ "', topic: '"+ date+ "', link:"+filename+"},\n"
        full_audio_list.append(obj_string)


f = open("data.tsx", "a")
for i in import_strings:
    f.write(i)

f.write("\n\nexport const shortAudio = [\n")
for obj in short_audio_list:
    f.write(obj)
f.write("];\n")

f.write("\n\nexport const fullAudio = [\n")
for obj in full_audio_list:
    f.write(obj)
f.write("];\n")

f.close()