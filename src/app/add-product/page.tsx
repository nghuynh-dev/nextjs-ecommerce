export const metadata = {
  title: 'Add Product - Gadget Zone',
}
export default function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add-product</h1>
      <form>
        <input
          className="mb-3 w-full input input-bordered"
          required
          name='name'
          placeholder="Name" />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full">
        </textarea>
        <input
          className="mb-3 w-full input input-bordered"
          required
          name='imageUrl'
          placeholder="Image URL" />
        <input
          className="mb-3 w-full input input-bordered"
          required
          name='price'
          type="number"
          placeholder="Price" />
        <button className="btn btn-primary btn-block" type="submit">Add Product</button>
      </form>
    </div>
  )
}