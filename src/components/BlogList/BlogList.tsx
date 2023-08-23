import { IBlog } from "types";
import { StyledBlogList } from "./styles";
import { BlogItem, Title } from "components";

interface IProps {
  blogs: IBlog[];
}

export const BlogList = ({ blogs }: IProps) => {
  return (
    <>
      <Title id="blogs" label="Blogs" />
      <StyledBlogList>
        {blogs.map((blog) => {
          return <BlogItem blog={blog} key={blog.title} />;
        })}
      </StyledBlogList>
    </>
  );
};
