### Plans 📆 

- Introduce members of team again since we added a 4th member who is a front end developer.
    
- Scope out our project idea.
    
- Split up tasks
    
- Choose sprint cadence
    

### Progress ✅

- One of our needs was finding a front-end developer. Thankfully Niku Singh reached out to ecurrencyhodler on twitter who then invited him to join the team and the next team call.
    
- After the call on July 7, we used the signal chat to continue brainstorming ideas. At first, we wanted to build something around agents. We also had a difficult time figuring out which of the prizes we should shoot for. We eventually coalesced around the idea of creating an incentivized crowd-sourcing platform for LLM's that would simultaneously filter out bad data. First, the filter the LLM would use would score the submitted data against the current database using a %. If the % was below a certain threshold, it would reject the submitted data. Second, the filter would also take into consideration the source of the data. For example, if the data was based around bitcoin education then info from bitcoin-optech / bitcoin stack exchange / bitcoin-dev mailing list would increase the chances of the data being accepted. We also brainstormed the idea of a dispute process if the submitter was confident that their data should be included in the LLM's dataset through a github PR.
    
- ecurrencyholder also used chatGPT 3.0 to test how it will compare various types of data against each other using a % based system.
    
    - "I tested some prompts comparing 2 different topics against each other. First it was Document B to A. Then Document A to B.
        
        It's a mixed bag for determining relevancy. If the topic is pretty similar, it's a high percentage. But if it's slightly off (BIP32 and wallet files), then it's a very low %. I think 10% is as low as it gets. It's the same result I got when I compared a ripple stack exchange question to the topic of bitcoin.
        
        Good news though is that when I combined HWI + BIP32 and compared it to hardware wallets, it actually increased the % relevancy.
        
        The real value here could be an LLM that determines how relevant a piece of data is to bitcoin."
        
- With the project properly defined, we dug into scoping out the tasks. Thankfully the roles were pretty clearly defined with Ron owning LLM's, anthony with backend, Niku with front end, and ecurrencyhodler as a PM.
    

### Problems ✋

- Scoping out the details of our project was difficult. We have very motivated team members but we might be biting off more than what we can chew. Therefore we split the goals of our project into an MVP for the demo and stretch goals.
    
- We need to figure out the exact method in which to pass data submitted through the website to the LLM.
    
- We want to potentially leverage the Lightning API but need to do some more research on how feasible it is.
    
- We still have yet to choose a project name. This is a big blocker which is preventing us from posting about our project. We created a scoring sheet in google sheet to figure out what we want to name our project.
    
- We also weren't sure if we could train a subset of data within chatgpt. We found a couple of resources that gave us the confidence to let us know we could and move forward. [\[1\]](https://levelup.gitconnected.com/training-your-own-llm-using-privategpt-f36f0c4f01ec)[\[2\]](https://medium.com/@smitkumbhani080/how-to-train-a-pre-trained-large-language-model-llm-in-python-using-openai-easy-27680c92fc3d)
    

### Links 🔗

- Here is the [agenda](https://docs.google.com/document/d/1Zq8wyv8qhFYOxw4Ow1mznzxM5ygmjn4IMRfnVYSw0wI/edit?usp=sharing) from our call on 7/14.
    
- Here is the [AI relevancy test](https://docs.google.com/spreadsheets/d/1WP1VuDQA2vTBQawJORFOuXrarP-3hQyGErbPCKSQIpI/edit?usp=sharing) that ecurrencyhodler performed under the tab "AI Relevancy Test".
    
- Here is the [branding sheet](https://docs.google.com/spreadsheets/d/1WP1VuDQA2vTBQawJORFOuXrarP-3hQyGErbPCKSQIpI/edit?usp=sharing) we used to brainstorm ideas of names for the project.
