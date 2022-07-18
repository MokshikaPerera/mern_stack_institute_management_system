import React from 'react'
import Sidenav from '../../components/admin/Sidenav'
import '../../style.css'

export default function Dashboard() {
  return (
    <div>
            
            <Sidenav/>
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-2">
                        <div class="dbox dbox--color-2">
                            <div class="dbox__body">
                                <span class="dbox__count">300</span>
                                <span class="dbox__title">Active Students</span>
                            </div>

                            <div class="dbox__action">
                                <a href="#" class="dbox_action_btn">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="dbox dbox--color-2">
                            <div class="dbox__body">
                                <span class="dbox__count">15</span>
                                <span class="dbox__title">Active academic staff</span>
                            </div>

                            <div class="dbox__action">
                                <a href="#" class="dbox_action_btn">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="dbox dbox--color-2">
                            <div class="dbox__body">
                                <span class="dbox__count">5</span>
                                <span class="dbox__title">Active non academic staff</span>
                            </div>

                            <div class="dbox__action">
                                <a href="#" class="dbox_action_btn">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="dbox dbox--color-2">
                            <div class="dbox__body">
                                <span class="dbox__count">10</span>
                                <span class="dbox__title">Subjects</span>
                            </div>

                            <div class="dbox__action">
                                <a href="#" class="dbox_action_btn">More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
