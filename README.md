# two-towers

The Project Formally Known As RAFTT

# Development

## Prerequisites

- **Git**
- **Github** account if you would like to make pull requests
- **Hugo** we are using `hugo_extended_0.111.3` available for download [here](https://github.com/gohugoio/hugo/releases/tag/v0.111.3) or consult the official [documentation](https://gohugo.io/getting-started/installing/)

## Setup & install instructions

`git clone git@github.com:geeksforsocialchange/two-towers.git && cd two-towers`

`hugo serve` for a local server - you will be able to access the site at [localhost:1313](http://localhost:1313/).

If you need test the site on multiple devices locally you can bind the address to your local IP, you can then run the command below replacing the IP address.

`hugo serve --bind 192.168.10.10 --baseURL http://192.168.10.10`

You would then visit (example IP) [192.168.10.10:1313](http://192.168.10.10:1313)

## adding a new item to the timeline

```sh
#                                        /name
hugo new --kind timeline-bundle timeline/quote1
```

Then edit the relevant info in `content/timeline/quote1/index.md`

Timeline images should be collocated with `index.md`

```
quote1
├── image.jpg
└── index.md
```

## Build

`hugo` command to build. This will create a directory called `public` which contains the website.

## Deployment

Deploys to [cloudflare](https://raftt.pages.dev).

When a change is committed to the `main` branch the site is rebuilt and deployed.

## Development

When a pull request is created, a preview site is deployed. Cloudflares github app will add a comment to pull requests with the url to this preview when changes are made to the relevant branch. Due to an [issue](https://community.cloudflare.com/t/pr-comment-only-made-if-additional-commits-pushed/398008) with the bot if are opening a pull request on a branch that has already been built by cloudflare there will be no comment but you can still access the preview by adding the branch name to the front of cloudflare pages URL.

`https://[branch-name].raftt.pages.dev`

If the build is successful and the changes are approved it can be merged into `main` which will automatically deploy it.

## Add new dates to the timeline

The list of decades used as markers on the timeline are defined in the timeline file in the data folder. If you want to add a new date marker to the timeline you can add a date into this chronologically ordered list.

## License

## Contributing

## Donations
