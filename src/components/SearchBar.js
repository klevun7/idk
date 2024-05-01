import  {Button}  from "@/components/ui/button"
import  {Input}  from "@/components/ui/input"

const SearchBar = () => {
  return (
    <div className="flex justify-center">
    <div className="flex w-full h-full max-w-sm items-center space-x-2">
      <Input type="Restaurant Name" placeholder="Tell Us Your Favorite Restaurants" />
      <Button type="add">Add</Button>
    </div>
    </div>
  );
};

export default SearchBar;
