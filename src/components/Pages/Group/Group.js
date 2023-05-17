import './Group.css';
import React, { useEffect, useState } from 'react'

function Group(){
    const [secondTitle, setSecondTitle] = useState('Mirva Invest Management');
    const [description, setDescription] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam, beatae accusantium temporibus, sit aliquam unde porro ducimus voluptatibus corrupti reprehenderit et consequuntur atque sequi odit, ex placeat? Officia, reiciendis quia. Modi illum iure hic expedita accusamus quibusdam corporis, quasi dolorem ratione asperiores blanditiis cumque accusantium quas ad unde? Beatae voluptatem iure dolores labore ipsa unde eius. Impedit laborum ea maiores architecto repellendus ex voluptatem nisi qui minima, soluta nobis voluptate quidem temporibus velit ducimus rem cumque dolorem! Iste a, earum eos porro consequuntur vel voluptas sit repudiandae velit eveniet magnam eum esse itaque! Ducimus illum animi maiores assumenda, doloremque, vel dolorem distinctio maxime temporibus sit ratione, neque commodi? Tempore praesentium nam animi, dolore ducimus dignissimos in. Corporis ratione doloremque ullam sequi, alias ipsum cumque sint officiis doloribus, et modi provident. Harum mollitia repellendus labore provident quia sunt quidem quibusdam optio, temporibus minus esse pariatur cum facere sit impedit hic consequuntur eaque porro unde, laboriosam quae rem. Commodi delectus ipsum veritatis vel beatae harum modi consectetur necessitatibus? Odio similique quidem illum eaque quod consequuntur atque nostrum cum vitae ea fuga repellendus facere modi earum cumque tenetur impedit, dicta magnam molestiae. Recusandae mollitia voluptates, rerum possimus at deserunt tempore alias odio?');
    const [btn, setBtn] = useState('Mirva Invest Management');

    const change = (company)=>{
        switch(company) {
            case 'MirvaInvestManagement':
                setSecondTitle('Mirva Invest Management');
                setDescription('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam, beatae accusantium temporibus, sit aliquam unde porro ducimus voluptatibus corrupti reprehenderit et consequuntur atque sequi odit, ex placeat? Officia, reiciendis quia. Modi illum iure hic expedita accusamus quibusdam corporis, quasi dolorem ratione asperiores blanditiis cumque accusantium quas ad unde? Beatae voluptatem iure dolores labore ipsa unde eius. Impedit laborum ea maiores architecto repellendus ex voluptatem nisi qui minima, soluta nobis voluptate quidem temporibus velit ducimus rem cumque dolorem! Iste a, earum eos porro consequuntur vel voluptas sit repudiandae velit eveniet magnam eum esse itaque! Ducimus illum animi maiores assumenda, doloremque, vel dolorem distinctio maxime temporibus sit ratione, neque commodi? Tempore praesentium nam animi, dolore ducimus dignissimos in. Corporis ratione doloremque ullam sequi, alias ipsum cumque sint officiis doloribus, et modi provident. Harum mollitia repellendus labore provident quia sunt quidem quibusdam optio, temporibus minus esse pariatur cum facere sit impedit hic consequuntur eaque porro unde, laboriosam quae rem. Commodi delectus ipsum veritatis vel beatae harum modi consectetur necessitatibus? Odio similique quidem illum eaque quod consequuntur atque nostrum cum vitae ea fuga repellendus facere modi earum cumque tenetur impedit, dicta magnam molestiae. Recusandae mollitia voluptates, rerum possimus at deserunt tempore alias odio?');
                setBtn('Mirva Invest Management');
              break;
            case 'MirvaTravelClimb':
                setSecondTitle(company);
                setDescription(company);
                setBtn(company);
              break;
            case 'MirvaRevalconInvest':
                setSecondTitle(company);
                setDescription(company);
                setBtn(company);
              break;
            default:
                setSecondTitle('Mirva Invest Management');
                setDescription('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam, beatae accusantium temporibus, sit aliquam unde porro ducimus voluptatibus corrupti reprehenderit et consequuntur atque sequi odit, ex placeat? Officia, reiciendis quia. Modi illum iure hic expedita accusamus quibusdam corporis, quasi dolorem ratione asperiores blanditiis cumque accusantium quas ad unde? Beatae voluptatem iure dolores labore ipsa unde eius. Impedit laborum ea maiores architecto repellendus ex voluptatem nisi qui minima, soluta nobis voluptate quidem temporibus velit ducimus rem cumque dolorem! Iste a, earum eos porro consequuntur vel voluptas sit repudiandae velit eveniet magnam eum esse itaque! Ducimus illum animi maiores assumenda, doloremque, vel dolorem distinctio maxime temporibus sit ratione, neque commodi? Tempore praesentium nam animi, dolore ducimus dignissimos in. Corporis ratione doloremque ullam sequi, alias ipsum cumque sint officiis doloribus, et modi provident. Harum mollitia repellendus labore provident quia sunt quidem quibusdam optio, temporibus minus esse pariatur cum facere sit impedit hic consequuntur eaque porro unde, laboriosam quae rem. Commodi delectus ipsum veritatis vel beatae harum modi consectetur necessitatibus? Odio similique quidem illum eaque quod consequuntur atque nostrum cum vitae ea fuga repellendus facere modi earum cumque tenetur impedit, dicta magnam molestiae. Recusandae mollitia voluptates, rerum possimus at deserunt tempore alias odio?');
                setBtn('Mirva Invest Management');
          }
        
    };

    return(
        <div className='group w-full h-full bg-zinc-700 flex justify-center align-middle items-center'>
            <div className='opacity w-full h-full flex justify-center align-middle items-center'>
                <div className='box shadow-lg bg-zinc-800 '>
                    <div className='box-left bg-gray-100 border-gray-100 flex justify-between flex-col items-center p-8'>
                        <h2 className='title text-xl p-4 font-semibold'> 
                            <i className="fab fa-magento text-xl logo mr-2"></i>
                            Mirva Group
                        </h2>
                        <ul className='companies w-full'>
                            <li onClick={()=>{change('MirvaInvestManagement')}} className='btn-group w-full p-4 mb-4 flex justify-between items-center cursor-pointer text-base'>
                                <div> Mirva Invest Management</div>
                                <i class="fas fa-angle-double-right text-lg"></i>
                            </li>
                            <li onClick={()=>{change('MirvaTravelClimb')}} className='btn-group w-full p-4 mb-4 flex justify-between items-center cursor-pointer text-base'> 
                                <div>Mirva Travel Climb</div>
                                <i class="fas fa-angle-double-right text-lg"></i>
                            </li>
                            <li onClick={()=>{change('MirvaRevalconInvest')}} className='btn-group w-full p-4 mb-4 flex justify-between items-center cursor-pointer text-base'> 
                                <div>Mirva Revalcon Invest</div>
                                <i class="fas fa-angle-double-right text-lg"></i>
                            </li>
                        </ul>
                        <i className="fab fa-magento text-xl logo"></i>
                    </div>
                    <div className='box-right border-zinc-800 bg-zinc-700'>
                        <div className='w-full h-full text-gray-100 p-8 flex justify-between flex-col items-center'>
                            <h2 className='second-title text-base p-4'>{secondTitle}</h2>
                            <p className='text-base'>{description}</p>
                            <a href="#" className='btn-companies bg-gray-100'>
                                {btn} 
                                <i class="fas fa-angle-double-right text-lg ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Group;