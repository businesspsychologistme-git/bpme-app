const isDev = import.meta.env.DEV;
const BASE_BUBBLE_API_URL = `${import.meta.env.VITE_BUBBLE_API_URL || "https://businesspsychologist.me/api/1.1/obj"}/Blog_app`;
const BUBBLE_API_URL = isDev ? "/api/bubble/Blog_app" : BASE_BUBBLE_API_URL;
const BUBBLE_API_TOKEN = import.meta.env.VITE_BUBBLE_API_TOKEN;

export interface BlogPost {
  _id: string;
  title?: string;
  Title?: string;
  content?: string;
  Content?: string;
  image?: string;
  Image?: string;
  "Created Date"?: string;
  author?: string;
  Author?: string;
  [key: string]: any; // To accept other dynamic Bubble properties
}

export const getBlogs = async (): Promise<BlogPost[]> => {
  if (!BUBBLE_API_URL) {
    console.warn("VITE_BUBBLE_API_URL is not set");
    return [];
  }

  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (BUBBLE_API_TOKEN) {
      headers["Authorization"] = `Bearer ${BUBBLE_API_TOKEN}`;
    }

    const response = await fetch(BUBBLE_API_URL, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error(`Bubble API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.response.results || [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
};

export const getBlogById = async (id: string): Promise<BlogPost | null> => {
  if (!BUBBLE_API_URL) {
    console.warn("VITE_BUBBLE_API_URL is not set");
    return null;
  }

  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (BUBBLE_API_TOKEN) {
      headers["Authorization"] = `Bearer ${BUBBLE_API_TOKEN}`;
    }

    const response = await fetch(`${BUBBLE_API_URL}/${id}`, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error(`Bubble API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.response || null;
  } catch (error) {
    console.error(`Failed to fetch blog with ID ${id}:`, error);
    return null;
  }
};

export const createBlogPost = async (postData: { Title: string; Description: string; Image?: string }): Promise<string | null> => {
  if (!BUBBLE_API_URL) {
    console.warn("VITE_BUBBLE_API_URL is not set");
    return null;
  }

  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (BUBBLE_API_TOKEN) {
      headers["Authorization"] = `Bearer ${BUBBLE_API_TOKEN}`;
    }

    const response = await fetch(BUBBLE_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`Bubble API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.id || null;
  } catch (error) {
    console.error("Failed to create blog post:", error);
    throw error;
  }
};
