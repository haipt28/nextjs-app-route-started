import { Stack } from "@mui/material"

export interface ITestPageProps {}

export default function TestPage(props: ITestPageProps) {
  // dau-tieng.png
  // bau-bang.png
  // phu-giao.png
  // bac-tan-uyen.png
  // tan-uyen.png
  // di-an.png
  // thuan-an.png
  // thu-dau-mot.png
  // ben-cat.png

  const district = [
    {
      id: "dau-tieng",
      title: "Dầu Tiếng",
      src: "/image/binh-duong/dau-tieng.png",
      width: 207.94789,
      height: 309.37335,
      top: 0,
      left: 0,
      zIndex: 1,
    },
    {
      id: "bau-bang",
      title: "Bàu Bàng",
      src: "/image/binh-duong/bau-bang.png",
      width: 181.18871,
      height: 199.28825,
      top: 93.4,
      left: 138.32,
      zIndex: 2,
    },
    {
      id: "phu-giao",
      title: "Phú giáo",
      src: "/image/binh-duong/phu-giao.png",
      width: 262.233,
      height: 259.16287,
      top: 5.59,
      left: 245.54,
      zIndex: 1,
    },
    {
      id: "ben-cat",
      title: "Bến cát",
      src: "/image/binh-duong/ben-cat.png",
      width: 163.34369,
      height: 156.52852,
      top: 233.97,
      left: 134.76,
      zIndex: 1,
    },
    {
      id: "thu-dau-mot",
      title: "Thủ Dầu Một",
      src: "/image/binh-duong/thu-dau-mot.png",
      width: 105.5,
      height: 143,
      top: 321.3,
      left: 208.99,
      zIndex: 1,
    },
    {
      id: "di-an",
      title: "Dĩ An",
      src: "/image/binh-duong/di-an.png",
      width: 85.2,
      height: 88.3,
      top: 426.51,
      left: 319.11,
      zIndex: 1,
    },
    {
      id: "thuan-an",
      title: "Thuận An",
      src: "/image/binh-duong/thuan-an.png",
      width: 86.9,
      height: 109.3,
      top: 409.7,
      left: 247.82,
      zIndex: 1,
    },
    {
      id: "tan-uyen",
      title: "Tân Uyên",
      src: "/image/binh-duong/tan-uyen.png",
      width: 126.9,
      height: 165.2,
      top: 284.35,
      left: 279.79,
      zIndex: 1,
    },
    {
      id: "bac-tan-uyen",
      title: "Bắc Tân Uyên",
      src: "/image/binh-duong/bac-tan-uyen.png",
      width: 243.7,
      height: 198.69,
      top: 203.73,
      left: 275.23,
      zIndex: 1,
    },
  ]
  const createDistrict = (arr: any[], size: number) => {
    return arr.map((item) => {
      return {
        id: item.id,
        title: item.title,
        src: item.src,
        width: item.width,
        height: item.height,
        top: caculateOffset(size, item.top),
        left: caculateOffset(size, item.left),
        zIndex: item.zIndex,
      }
    })
  }
  const caculateOffset = (size: number, offset: number) => {
    return (offset / size) * 100
  }

  const size = 520
  const districts = createDistrict(district, 520)

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#1e293b] p-[5%] text-white">
      <Stack
        sx={{
          width: size,
          height: size,
          background: "#334155",
          position: "relative",
        }}
      >
        {districts.map((district) => {
          return (
            <Stack
              key={district.id}
              sx={{
                position: "absolute",
                top: `${district.top}%`,
                left: `${district.left}%`,
                zIndex: district.zIndex,
                width: district.width,
                height: district.height,
              }}
            >
              <Stack
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${district.src})`,
                  position: "relative",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)", // Hiệu ứng nổi 3D
                    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))", // Đổ bóng xung quanh hình
                    zIndex: 10,
                  },
                }}
              ></Stack>
            </Stack>
          )
        })}
      </Stack>
    </div>
  )
}
