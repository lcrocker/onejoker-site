
.PHONY: all site clean lint deploy

all: site

site: ./source/*.ts
	deno run --allow-read --allow-write ./source/builder.ts

lint:
	deno lint ./source/*.ts
