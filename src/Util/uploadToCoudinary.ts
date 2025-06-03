export const uploadToCoudinary = async (pics:any) => {

    const cloud_name="dcpesbd8q"
    const upload_preset="zosh-food"
    
    if (pics) {
      
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", cloud_name);
  
      const res = await 
      fetch("https://api.cloudinary.com/v1_1/dcpesbd8q/image/upload", {
        method: "POST",
        body: data,
      })
        
        const fileData=await res.json();
        console.log("url : ", fileData);
        return fileData.url
  
    } else {
      console.log("error : pics not found");
    }
  }