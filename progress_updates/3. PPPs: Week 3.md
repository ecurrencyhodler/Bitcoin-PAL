### Plans and Progress 📆

Below is the agenda from our call 7/20/23.

**Communication**

Signal works. Github for discussions work for agendas

**Branding**

*   Chose [this](https://github.com/ecurrencyhodler/Bitcoin-PAL/issues/2#issuecomment-1640552339) for the logo.
    
*   Need to run primary colors and run it through palette tool. Hand it off to Niku.
    
*   Ron to send andrew names and screenshots so we can make a post on bolt.fun
    

**Boltfun profiles**

Ron and Anthony need to create them. Niku sent his over.

**lnd's api**

*   Will we use lightning for settlement? yes
    
*   Anthony to own researching lightning api and integration.
    

**Repo**

*   It's okay to keep it under e's repo.
    
*   Where should they develop and push the repo? Can do it on theirs and push it after.
    

**Deliverables for backend**

*   Should we use vercel? We should probably use local host.
    
*   Lightning payment-> we can probably call a live lightning node and host Bitcoin Pal locally.
    
*   Can leverage lightning address because its hosted custodially.
    

**Check-in**

*   Andrew. No blockers. Posted on bolt.fun. Set up [repo](https://github.com/ecurrencyhodler/boltfun-ai/blob/main/README.md), [project](https://github.com/users/ecurrencyhodler/projects/4/views/1), and tasks.
    
*   Anthony. No blockers. Already talked about backend infra a little bit. Looked into github action workflows and automations and paying it out.
    
*   Ron. No blockers. Will research training methods and calling it all through python. Trying to determine the best one. Ron will work on code and solution first. Then feed data. Can host data in repo. Big question is who hosts the project? We could host data and model on github.
    
*   Niku. Looked at front end chat ui. Proposed a new user flow of two separate landing pages.
    

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/1985ae7d-cef3-4e9e-6bbd-6679cdbfa500/public)

Ron gave feedback that simpler is better. Andrew agreed. Andrew showed examples of google search and how submission UI could look to show that submitting data directly impacts bitcoin PAL. You can see the [video here.](https://github.com/ecurrencyhodler/Bitcoin-PAL/issues/2#issuecomment-1646891544)

Ron and I suggested that having two landing pages segments it visually and mentally. Niku will submit wireframes for us to check out proposed user flow.

**License**

Ron raised which license will we be using? We decided on MIT.

### Problems ✋

*   We ran into a blocker around the UI. We had a discussion around whether we should have two separate landing pages or one. Right now we are leaning towards one but our front end engineer will propose other solutions.
    
*   We also ran into problems of figuring out which kind of bitcoin network we'd use (signet, testnet, regtest, mainnet, L1). We landed on mainnet and L2 but with small amounts of btc.
    
*   We also discussed the backend infrastructure. We debated between hosting it using a cloud service or doing everything locally. One issue that was raised was if we would need to run our own lightning infra if we hosted it locally. Answer was no. We can leverage hosted solutions. Also lightning addresses / lnurl works as well so we can just call those locally from our computer.
    

### Links 🔗

*   Our [agenda](https://github.com/ecurrencyhodler/Bitcoin-PAL/discussions/11)
    
*   [Github](https://github.com/ecurrencyhodler/boltfun-ai/blob/main/README.md)
