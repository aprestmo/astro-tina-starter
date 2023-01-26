import { defineStaticConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineStaticConfig({
	branch,
	clientId: "b42063f5-f145-4a9d-9b41-e5c8328deda7", // Get this from tina.io
	token: "dba7d7108df1237d04333fb21e1108a51025750d", // Get this from tina.io
	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "uploads",
			publicFolder: "public",
		},
	},
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "src/content",
				format: "mdx",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "string",
						name: "description",
						label: "Description",
					},
					{
						type: "image",
						name: "heroImage",
						label: "Hero Image",
					},
					{
						type: "datetime",
						name: "pubDate",
						label: "Publish Date",
						ui: {
							dateFormat: "DD MMMM YYYY",
						},
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
						templates: [
							{
								name: "Counter",
								label: "Counter",
								fields: [
									{
										name: "variableExample",
										label: "Variable Example",
										type: "string",
									},
								],
							},
						],
					},
				],
			},
		],
	},
});
