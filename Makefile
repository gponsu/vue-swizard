.DEFAULT_GOAL := start

.PHONY: install
install:: ##Install application dependencies
	@docker build -t vue-swizard:latest -t vue-swizard:0.1.0 .
	@docker run -it \
  --mount type=bind,source="$(shell pwd)",target=/opt/app \
  vue-swizard:latest npm install


.PHONY: start
start:: ##Start application for development
	@docker run -it \
  --mount type=bind,source="$(shell pwd)",target=/opt/app \
	--publish 8080:8080 \
  vue-swizard:latest
