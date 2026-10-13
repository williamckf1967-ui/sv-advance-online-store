// EDIT THIS FILE to update your catalogue. Prices are starter examples and must be checked before publishing.
const STORE_CONFIG = {
  // WhatsApp number in international format, digits only: Malaysia 60 + number without the first 0.
  whatsappNumber: "60126996021",
  currency: "RM"
};

const PRODUCTS = [
  {id:"ram-ddr3-4",name:"Kingsman DDR3 4GB Desktop RAM",brand:"Kingsman",category:"RAM",type:"DDR3",spec:"4GB · DDR3 · Desktop UDIMM",price:65,details:["DDR3 desktop memory module","4GB capacity","Confirm motherboard compatibility before ordering"],featured:true},
  {id:"ram-ddr3-8",name:"Kingsman DDR3 8GB Desktop RAM",brand:"Kingsman",category:"RAM",type:"DDR3",spec:"8GB · DDR3 · Desktop UDIMM",price:120,details:["DDR3 desktop memory module","8GB capacity","Confirm motherboard compatibility before ordering"],featured:true},
  {id:"ram-ddr4-8-2666",name:"Kingsman DDR4 8GB 2666MHz",brand:"Kingsman",category:"RAM",type:"DDR4",spec:"8GB · 2666MHz · DDR4",price:190,details:["DDR4 desktop memory","8GB capacity","2666MHz rated speed; actual speed depends on platform"],featured:true},
  {id:"ram-ddr4-16-2666",name:"Kingsman DDR4 16GB 2666MHz",brand:"Kingsman",category:"RAM",type:"DDR4",spec:"16GB · 2666MHz · DDR4",price:390,details:["DDR4 desktop memory","16GB capacity","2666MHz rated speed; actual speed depends on platform"],featured:true},
  {id:"ram-ddr5-16",name:"Kingsman DDR5 16GB Memory",brand:"Kingsman",category:"RAM",type:"DDR5",spec:"16GB · DDR5 · Confirm speed before ordering",price:0,details:["DDR5 memory module","Confirm speed, form factor and compatibility with sales"],featured:false,quote:true},
  {id:"ram-ddr5-32",name:"Kingsman DDR5 32GB Memory",brand:"Kingsman",category:"RAM",type:"DDR5",spec:"32GB · DDR5 · Confirm speed before ordering",price:0,details:["DDR5 memory module","Confirm speed, form factor and compatibility with sales"],featured:false,quote:true},
  {id:"ssd-sata-256",name:"Kingsman SK350 SATA SSD 256GB",brand:"Kingsman",category:"SSD / NVMe",type:"SATA SSD",spec:"256GB · 2.5-inch SATA SSD",price:170,details:["2.5-inch SATA solid state drive","256GB capacity","Confirm stock and warranty terms"],featured:true},
  {id:"ssd-sata-512",name:"Kingsman SK350 SATA SSD 512GB",brand:"Kingsman",category:"SSD / NVMe",type:"SATA SSD",spec:"512GB · 2.5-inch SATA SSD",price:280,details:["2.5-inch SATA solid state drive","512GB capacity","Confirm stock and warranty terms"],featured:true},
  {id:"ssd-sata-1tb",name:"Kingsman SK350 SATA SSD 1TB",brand:"Kingsman",category:"SSD / NVMe",type:"SATA SSD",spec:"1TB · 2.5-inch SATA SSD",price:470,details:["2.5-inch SATA solid state drive","1TB capacity","Confirm stock and warranty terms"],featured:false},
  {id:"ssd-nvme-256",name:"Kingsman KM600 NVMe 256GB",brand:"Kingsman",category:"SSD / NVMe",type:"NVMe",spec:"256GB · M.2 NVMe · PCIe Gen3 x4",price:205,details:["M.2 NVMe SSD","PCIe Gen3 x4","Check motherboard M.2 support and physical size"],featured:true},
  {id:"ssd-nvme-512",name:"Kingsman KM600 NVMe 512GB",brand:"Kingsman",category:"SSD / NVMe",type:"NVMe",spec:"512GB · M.2 NVMe · PCIe Gen3 x4",price:320,details:["M.2 NVMe SSD","PCIe Gen3 x4","Check motherboard M.2 support and physical size"],featured:true},
  {id:"ssd-nvme-1tb",name:"Kingsman KM600 NVMe 1TB",brand:"Kingsman",category:"SSD / NVMe",type:"NVMe",spec:"1TB · M.2 NVMe · PCIe Gen3 x4",price:520,details:["M.2 NVMe SSD","PCIe Gen3 x4","Check motherboard M.2 support and physical size"],featured:false},
  {id:"board-h61",name:"51 RISC H61 Motherboard",brand:"51 RISC",category:"Motherboard",type:"Motherboard",spec:"LGA1155 · DDR3",price:180,details:["Intel LGA1155 platform","DDR3 memory support","Confirm CPU and board revision before ordering"],featured:true},
  {id:"board-h81",name:"51 RISC H81 Motherboard",brand:"51 RISC",category:"Motherboard",type:"Motherboard",spec:"LGA1150 · DDR3",price:190,details:["Intel LGA1150 platform","DDR3 memory support","Confirm CPU and board revision before ordering"],featured:true},
  {id:"board-h110",name:"51 RISC H110 Motherboard",brand:"51 RISC",category:"Motherboard",type:"Motherboard",spec:"LGA1151 · DDR4",price:250,details:["Intel LGA1151 platform","DDR4 memory support","Confirm supported CPU generation before ordering"],featured:true},
  {id:"board-h310",name:"51 RISC H310 Motherboard",brand:"51 RISC",category:"Motherboard",type:"Motherboard",spec:"LGA1151 · DDR4",price:255,details:["Intel LGA1151 platform","DDR4 memory support","Confirm supported CPU generation before ordering"],featured:false},
  {id:"board-h410",name:"51 RISC H410 Motherboard",brand:"51 RISC",category:"Motherboard",type:"Motherboard",spec:"LGA1200 · DDR4",price:260,details:["Intel LGA1200 platform","DDR4 memory support","Confirm supported CPU generation before ordering"],featured:false},
  {id:"board-h510",name:"51 RISC H510 Motherboard",brand:"51 RISC",category:"Motherboard",type:"Motherboard",spec:"LGA1200 · DDR4",price:270,details:["Intel LGA1200 platform","DDR4 memory support","Confirm supported CPU generation before ordering"],featured:false}
];
