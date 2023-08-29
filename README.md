<br/>

<div align="center" style="margin: 30px;">
	<img src="https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/frontend/src/owl.png?raw=true" align="center" /> 
	<br />
	<h2>Bitcoin-PAL</h2>
	<h3>📚 Personal Learning Assistant for Bitcoin</h3>
</div>

<div align="center">

[![Bitcoin](https://img.shields.io/badge/Bitcoin-000?style=for-the-badge&logo=bitcoin&logoColor=white)](https://bitcoin.org) [![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://www.python.org/)[  ![React](https://img.shields.io/badge/react-000?style=for-the-badge&logo=react)](https://react.dev/) 
<br/>
[![GitHub tag](https://img.shields.io/github/tag/ecurrencyhodler/Bitcoin-PAL?include_prereleases=&sort=semver)](https://github.com/ecurrencyhodler/Bitcoin-PAL/releases/) [![License](https://img.shields.io/badge/License-MIT-blue)](#license)  [![issues - badge-generator](https://img.shields.io/github/issues/ecurrencyhodler/Bitcoin-PAL)](https://github.com/ecurrencyhodler/Bitcoin-PAL)

</div>

<br/>

# Problem
 Where do users go for trusted Bitcoin educational resources? In the ever-changing and evolving world of Bitcoin, false information, distrust, and confusion about complex topics is common. This makes navigating the Bitcoin landscape challenging for many, especially for new users.

# Solution
We believe open-source LLMs will develop exponentially faster than closed-source LLMs. In light of this our team created Bitcoin-PAL, a bitcoin focused **AI chatbot** coupled with an **incentivized crowd-sourcing platform** to train LLMs with **bitcoin**. 

Using Bitcoin-PAL, bitcoiners can rely on and contribute to **trusted** and **vetted bitcoin documentation** rather than query the general internet and GPT models.

Bitcoin-PAL is a proof of concept and was built during the [#Ai4ALL](https://bolt.fun/tournaments/ai4all/overview) Hackathon presented by Bolt.fun, which ran from July 1 - August 1, 2023. The project also were the [winners of the Training Track](https://twitter.com/fedibtc/status/1688617484155281408?s=20)!

# Resources
1. [Project Charter and User Stories](https://docs.google.com/document/d/1SNIwo1evh4KxonslYy0HhbsHSHQuQU8B6TuFWWzATPM/edit?usp=sharing)
2. [Backend Documentation](https://github.com/ecurrencyhodler/Bitcoin-PAL/tree/main/backend)
3. [Project Board](https://github.com/users/ecurrencyhodler/projects/4)
4. [Figma designs](https://www.figma.com/file/K5CfpF43xBeTMZL9KCJEOZ/Bitcoin-PAL?type=design&node-id=13%3A505&mode=design&t=WOKDVJugadqeDqM5-1)
5. [GitHub Actions](https://github.com/ecurrencyhodler/Bitcoin-PAL/tree/main/.github/workflows)
6. [Demo Video](https://www.youtube.com/watch?v=i-LUgcZiPEA)
7. [Presentation Deck](https://docs.google.com/presentation/d/1wQ2xA9-Qhlzq_LHi4xZEoWbT_n2CrFk7vsxiAPJRJ2o/edit?usp=sharing)

# Demo and Presentation Video

[![Bitcoin-PAL Demo](https://img.youtube.com/vi/i-LUgcZiPEA/0.jpg)](https://www.youtube.com/watch?v=i-LUgcZiPEA)

# Setup 

## Back End - Console
The backend can be used as a standalone console or a python flask based webservice. 

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

<img src="https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/img/ingest.png?raw=true" alt="A console based AI document ingestion tool" width="600"> 

### Usage - Console
1. `python3 bitcoinPAL.py`
2. Ask your question on the command line

<img src="https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/img/console.png?raw=true" alt="A console based AI chat tool for bitcoin education" width="600">

### Usage - Server
1. `python3 server.py`
2.  Ask a question by submitting a curl command with a json payload to localhost:8000
	`curl -X POST -H "Content-Type: application/json" -d '{"query":"What is bitcoin?"}' http://localhost:8000`

<img src="https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/img/server.png?raw=true" alt="A console based curl query to the back end server" width="600">

## Front End - Client
The back end server is required to be running also in order for the front end to talk to API for querying. 

### Install and Usage - Console
1. git clone this repo
2. cd to this repo directory
3. `cd frontend` - change directory to the front end
2. `npm install ` - installs all node modules
3. `npm start`- starts front end on localhost:3000
4. Navigate to `http://localhost:3000` and ask your question

### Screenshot
<img src="https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/img/frontend.png?raw=true" alt="A react based front end for querying user input" width="600">

## Standing on the shoulders of giants

In addition to the libraries listed in `requirements.txt` and npm packages, this project also uses:

- [PrivateGPT](https://github.com/imartinez/privateGPT)
- [Markdown Badges](https://github.com/Ileriayo/markdown-badges) by Ileriayo
- [GPT4All-J v1.3-groovy .bin](https://gpt4all.io/index.html)

# Note
This software has no guarantees and was created during a hackathon. All software should be considered beta unless otherwise explicitly specified. The user assumes all risk by executing any code contained in this repository. 

# License
Bitcoin PAL is released under the terms of the MIT license. See [LICENSE](https://github.com/ecurrencyhodler/Bitcoin-PAL/blob/main/LICENSE) for more information or see https://opensource.org/licenses/MIT
