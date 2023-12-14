import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: any) => {

    const truncateBlogDesc = blog.attributes.Content.length > 80 ? blog.attributes.Content.substring(0, 80) + "..." : blog.attributes.Content;
    const imageUrl = "http://127.0.0.1:1337" + blog.attributes.Image.data.attributes.url;
    console.log(imageUrl)
    return (
        <div>
            <Link href={`/blog/${blog?.id}`}>
                <div className="relative">
                    <Image src={imageUrl} alt={""} width={"250"} height={"250"} className="rounded-t-lg"></Image>
                </div>
                <div className="p-2">
                    <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
                        {blog.attributes.Title}
                    </h2>
                    <p className="text-grey">{truncateBlogDesc}</p>
                </div>
            </Link>
        </div>
    );
}

export default BlogCard;