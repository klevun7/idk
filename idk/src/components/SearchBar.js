import  {Button}  from "@/components/ui/button"
import  {Input}  from "@/components/ui/input"

const SearchBar = () => {
  return (
    <div className="flex w-full h-full justify-center max-w-sm items-center space-x-2">
      <Input type="Restaurant Name" placeholder="What type of Food?" />
      <Button type="search">Search</Button>
    </div>
  );
};

export default SearchBar;
