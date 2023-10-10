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

## adding a new partners to the about page

```sh
#                                        /name
hugo new --kind partners-bundle partners/partner1
```

Then edit the relevant info in `content/partners/partner1/index.md`

Partner images should be collocated with `index.md`

```
partner1
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

All original written content for this site is licensed under Creative Commons ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)). This includes all of the quotes from our storytellers. 

The design and code for this site is licensed under the open source [MIT licence](https://opensource.org/license/mit/).

We have endeavoured to secure Creative Commons rights for as many images as possible, but due to the nature of sourcing archival imagery, this has not been possible for all images used on this site. Please see each individual image for usage rights and attribution.

Due to the historic nature of some images on this site, it has been challenging to ascertain the original copyright holder. We have done our utmost to establish this across all imagery used on this site, but if you are the rights holder and believe we are using your work without permission (or is not covered by a limitation or exception in national law), please contact us at info@gfsc.studio, so that we can remove it or attribute it correctly. 

Please state the following: 

- Your contact details
- Full details of the material and when you found it
- Proof that you are the rights holder and a statement that, under penalty of
perjury, you are the rights holder or are an authorised representative
- Your contact details and address

Upon receipt of notification, the Notice and Takedown Procedure is then invoked as follows:

1. The project will acknowledge receipt of your complaint by email and will make an initial assessment of the validity of the complaint.
2. Upon receipt of a valid complaint the material will be temporarily removed from the project website pending an agreed solution.
3. The project will contact the contributor who provided the material, if relevant. The contributor will be notified that the material is subject to a complaint, under what allegations, and will be encouraged to assuage the complaints concerned.
4. We will endeavour to resolve the issue swiftly and amicably and to the satisfaction of both parties, with the following possible outcomes:
    - The material is replaced on the website unchanged.
    - The material is replaced on the website with changes.
    - The material is permanently removed from the website.
5. If we are unable to agree a solution, the material will remain unavailable until a time when a resolution has been reached.

## Contributing

## Donations
