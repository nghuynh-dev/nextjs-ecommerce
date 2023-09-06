import Link from "next/link";
import logo from "@/assets/logo-mc.png"
import Image from "next/image";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShopingCartButton from "@/app/Navbar/shopingCartButton";
import UserMenuButton from "@/app/Navbar/UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function searchProducts(formdata: FormData) {
  "use server";

  const searchQuery = formdata.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect("/search?query=" + searchQuery)
  }
}


export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <div className="bg-base-100 ">
      <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            <Image src={logo} height={40} width={40} alt="Logo"/>
            Store
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px]"
              />
            </div>
          </form>
          <ShopingCartButton cart={cart}/>
          <UserMenuButton session={session} />
        </div>
      </div>
    </div>
  )
}