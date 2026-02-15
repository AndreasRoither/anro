# list available recipes
default:
    @just --list

# start dev server
dev:
    pnpm dev

# production build
build:
    pnpm build

# preview production build
preview:
    pnpm preview

# run astro type checking and diagnostics
check:
    pnpm astro check

# install dependencies
install:
    pnpm install

# update dependencies interactively
update:
    pnpm update --interactive --latest

# remove build artifacts
clean:
    rm -rf dist .astro

# full project setup (install + build)
setup: install build

# lint with oxlint
lint:
    pnpm lint

# lint and auto-fix
lint-fix:
    pnpm lint:fix

# format with oxfmt
fmt:
    pnpm fmt

# check formatting without writing
fmt-check:
    pnpm fmt:check

# lint + format check (CI-friendly)
ci-check: fmt-check lint check

# --- Docker ---

# build docker image
docker-build:
    docker build -t anro .

# run docker detached container on port 3000
docker-run:
    docker run -d --name anro -p 3000:3000 anro

# build and run docker container
docker-up: docker-build docker-run

# stop and remove the anro container
docker-down:
    docker rm -f anro

# rebuild from scratch (no cache)
docker-rebuild:
    docker build --no-cache -t anro .

# show docker image size
docker-size:
    docker images anro
