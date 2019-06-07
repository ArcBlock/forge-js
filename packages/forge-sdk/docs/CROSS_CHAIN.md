# How to make the cross chain script work?

* Start a local forge node with `forge-cli`
* Make sure the forge webpp is started with `forge web start`
* Grab the validator address from for webapp dashboard and use that as anchor address
* Get local copy of `forge-core-protocols`, and update `deposit_tether_tx` config to use the new anchor address
* Compile the `deposit_tether_tx` with `forge protocol:compile`
* Deploy the new version of `deploy_tether_tx` with `forge protocol:deploy`
* Update `cross_chain.js` script to use the new anchor address
