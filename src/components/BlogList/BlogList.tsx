import { IBlog } from "types";
import { Blogs, StyledBlogList } from "./styles";
import { BlogItem, Title } from "components";

interface IProps {
  blogs: IBlog[];
}

export const BlogList = ({ blogs }: IProps) => {
  return (
    <Blogs id="blogs">
      <Title label="Blogs" />
      <StyledBlogList>
        {blogs.map((blog) => {
          return <BlogItem blog={blog} key={blog.title} />;
        })}
      </StyledBlogList>
    </Blogs>
  );
};
