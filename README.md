# couchcouch.github.io

Personal site built with [Hugo](https://gohugo.io/).

## Development

```sh
hugo server -D
```

## Build

```sh
hugo
```

Output goes to `public/`.

## Deploy

### VPS (rsync)

```sh
./deploy.sh user@vps:/var/www/site
```

### GitHub Pages

Push to `main` — the GitHub Action handles it automatically.
