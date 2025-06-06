import { getGithubLastEdit } from "fumadocs-core/server";

export const getLastModified = async (page: { file: { path: string } }) => {
  const lastEdit = await getGithubLastEdit({
    owner: "UmairFaiser",
    repo: "learn-the-web",
    path: `content/docs/${page.file.path}`,
    token: `Bearer ${process.env.GITHUB_TOKEN}`,
  });

  return lastEdit;
};
