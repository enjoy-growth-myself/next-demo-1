import Link from "next/link";
import { Button } from "@mui/material";

const Page = () => {
  return (
    <div className="flex flex-row items-center mt-10">
      <div>
        <Link href={"/exp/basic"} className="mx-4">
          <Button
            variant="outlined"
            sx={{
              borderWidth: "2px",
              borderColor: "blue",
              color: "blue",
              padding: "2px 2px",
            }}
          >
            基礎
          </Button>
        </Link>
        <Button
          variant="outlined"
          sx={{
            borderWidth: "2px",
            borderColor: "blue",
            color: "blue",
            padding: "2px 2px",
          }}
        >
          画面２
        </Button>
        <Button>MUIのボタンレイアウトです</Button>
      </div>
    </div>
  );
};

export default Page;
