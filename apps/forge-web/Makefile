dep:
	@echo "Reinstall dependencies..."
	@rm -rf node_modules
	@yarn

deploy-explorer-beta:
	@yarn build:explorer-beta
	@cp public/_redirects.beta build/_redirects
	@netlify deploy --prod --dir=build --site=3d20ed91-e432-4980-b419-f6c90aa6dbc3

deploy-explorer-prod: build prepare-prod-redirect
	@yarn build:explorer-prod
	@cp public/_redirects.prod build/_redirects
	@netlify deploy --prod --dir=build --site=be6b6c45-ad9a-47b7-9242-d8da535502a8
