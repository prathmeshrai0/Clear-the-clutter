import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path'

// console.log("start ")
// console.log(fs.readdir);
// console.log("end")
let basepath = "D:\\padai krlo\\web dev\\prac\\sigma\\91-project-clear_the_cutter\\unorganised_files"

let files = await fs.readdir(basepath)

// console.log(files);

for (const element of files) {
    /*
        // my code not working 
         
        // console.log(element);
        let ext = element.split('.')[element.split('.').length - 1]// basicall assessing the from the last and assessing the ext name
        // console.log(typeof ext);
       
    
        // console.log("runnign for "+element);
        
        // to create folder
        // if (!(fsn.existsSync(path.join(basepath, ext)))) {
        //     fsn.mkdir(ext,(err)=>{
        //         if(err){
        //             console.log(err);
        //         }
        //         else{
        //             console.log("folder created");
        //         }
        //     });
             
        // }
    
        // for already created folders 
        // else{
        //       console.log("folder already created");
        //       fsn.rename(basepath, path.join(basepath, ext))
        // }
     
        */


    let ext = element.split('.')[element.split('.').length - 1]// basicall assessing the from the last and assessing the ext name

    if (fsn.existsSync(path.join(basepath, ext))  ) {
        
        //moving
        
        if(element == 'main.js' || element =='package.json'){
            continue;
        }
        fs.rename(path.join(basepath,element),path.join(basepath,ext,element))
    }
    else{
        if(element == 'main.js' || element =='package.json'){
            continue;
        }

        fsn.mkdir(ext, (err) => {
            if (err) {
              console.error('Error creating directory:', err);
            } else {
              console.log('Directory "hd" created successfully');
            }
    })

    files.push(element) // usse files me phir se vo element aa jata he jiska abhi folder bna he yayyy
    }
    // console.log(   element);
}