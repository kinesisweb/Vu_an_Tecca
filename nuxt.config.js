const colors = require("vuetify/es5/util/colors").default;

const current = __dirname;
let root = /baybeach/i.test(current) ? __dirname : __dirname + "/baybeach";

module.exports = {
	mode: "universal",
	buildDir: "./.nuxt",
	rootDir: root,
	modulesDir: "../node_modules",
	/*
	 ** Headers of the page
	 */
	head: {
		titleTemplate: "%s",
		title: "Vu an Tecca - St Ives Bay Beach Chalet",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || ""
			}
		],
		link: [{ rel: "icon", type: "image/png", href: "favicon.png" }]
	},

	loading: { color: "#fff" },

	css: [],

	plugins: ["~plugins/SlideUpDown.js"],

	buildModules: ["@nuxtjs/vuetify"],

	modules: ["@nuxtjs/axios"],
	axios: {},
	vuetify: {
		customVariables: ["~/assets/variables.scss"],
		theme: {
			dark: false,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: "#bf360c",
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				},
				light: {
					accent: "#bf360c"
				}
			}
		}
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {}
	}
};
