import type { NextConfig } from "next";

const isGitHubActionsBuild = process.env.GITHUB_ACTIONS === "true" && process.env.NODE_ENV === "production";
const repoName = "B-MReg";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubActionsBuild ? `/${repoName}` : "",
  assetPrefix: isGitHubActionsBuild ? `/${repoName}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
