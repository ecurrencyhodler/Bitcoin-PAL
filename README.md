# Bitcoin PAL
For the bolt.fun hackathon, hackers are challenged to revolutionize how we use Bitcoin and AI. Our project will contain two parts:
1. A user-facing bitcoin education platform.
2. An incentivized crowd-sourced training model for LLM’s using bitcoin. This will be the main focus of our project.

# Resources
1. [Project Charter and User Stories](https://docs.google.com/document/d/1SNIwo1evh4KxonslYy0HhbsHSHQuQU8B6TuFWWzATPM/edit?usp=sharing)
2. [AI Project Ideas](https://docs.google.com/spreadsheets/d/1WP1VuDQA2vTBQawJORFOuXrarP-3hQyGErbPCKSQIpI/edit?usp=sharing)
3. [Minutes](https://drive.google.com/drive/folders/12LQ3hKL0cr6ejYoy8LkDnJUkfYg9o0bU?usp=sharing)
4. [Project Board](https://github.com/users/ecurrencyhodler/projects/4)
5. [Figma designs](https://www.figma.com/file/K5CfpF43xBeTMZL9KCJEOZ/Bitcoin-PAL?type=design&node-id=13%3A505&mode=design&t=WOKDVJugadqeDqM5-1)

# Setup 

## Back End - Console
The backend can be used a standalone console or a python flask based webservice. 

### Install and Usage - General
1. git clone this repo
2. `pip3 install -r requirements.txt` - install python dependencies
3.  Then, download the LLM model and place it in a directory of your choice:
	- LLM: default to [ggml-gpt4all-j-v1.3-groovy.bin](https://gpt4all.io/models/ggml-gpt4all-j-v1.3-groovy.bin). If you prefer a different GPT4All-J compatible model, just download it and reference it in your `.env` file.

4. Copy the `example.env` template into `.env`
	
	```shell
	cp example.env .env
	```

	and edit the variables appropriately in the `.env` file.
	```
	MODEL_TYPE: supports LlamaCpp or GPT4All
	PERSIST_DIRECTORY: is the folder you want your vectorstore in
	MODEL_PATH: Path to your GPT4All or LlamaCpp supported LLM
	MODEL_N_CTX: Maximum token limit for the LLM model
	MODEL_N_BATCH: Number of tokens in the prompt that are fed into the model at a time. Optimal value differs a lot depending on the model (8 works well for GPT4All, and 1024 is better for LlamaCpp)
	EMBEDDINGS_MODEL_NAME: SentenceTransformers embeddings model name (see https://www.sbert.net/docs/pretrained_models.html)
	TARGET_SOURCE_CHUNKS: The amount of chunks (sources) that will be used to answer a question
	```

	Note: because of the way `langchain` loads the `SentenceTransformers` embeddings, the first time you run the script it will require internet connection to download the embeddings model itself.

### Usage - Ingestion 
To ingest custom documentation the `source_documents` folder must be populated first and ingestion must be ran. 
1. `python3 ingest.py`

### Screenshot
<img src="https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/img/ingest.png?raw=true" alt="A console based AI document ingestion tool" width="600"> 

### Usage - Console
1. `python3 bitcoinPAL.py`
2. Ask your question on the command line

### Screenshot
<img src="https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/img/console.png?raw=true" alt="A console based AI chat tool for bitcoin education" width="600">

### Usage - Server
1. `python3 server.py`
2.  Ask a question by submitting a curl command with a json payload to localhost:8000
	`curl -X POST -H "Content-Type: application/json" -d '{"query":"What is bitcoin?"}' http://localhost:8000`

### Screenshot
<img src="https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/img/server.png?raw=true" alt="A console based curl query to the back end server" width="600">

## Front End - Client
The back end server is required to be running also in order for the front end to talk to API for querying. 

### Install and Usage - Console
1. git clone this repo
2. `npm install ` - installs all node modules
3. `npm start`- starts front end on localhost:3000
4. Navigate to `http://localhost:3000` and ask your question

### Screenshot
<img src="https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/img/frontend.png?raw=true" alt="A react based front end for querying user input" width="600">

# Note
This software has no guarantees and was created during a hackathon. All software should be considered beta unless otherwise explicitly specified. The user assumes all risk by executing any code contained in this repository. 

# License
Bitcoin PAL is released under the terms of the MIT license. See [LICENSE](https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/LICENSE) for more information or see https://opensource.org/licenses/MI
