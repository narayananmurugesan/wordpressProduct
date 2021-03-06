<?php

namespace VisualComposer\Modules\Account\Pages;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Request;
use VisualComposer\Helpers\Token;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Url;
use VisualComposer\Modules\Settings\Traits\Page;

/**
 * Class ActivationPage
 * @package VisualComposer\Modules\Account\Pages
 */
class ActivationPage extends Container implements Module
{
    use Page;
    use EventsFilters;

    /**
     * @var string
     */
    protected $slug = 'vcv-activation';

    /**
     * @var string
     */
    protected $templatePath = 'account/partials/activation-layout';

    /**
     * ActivationPage constructor.
     */
    public function __construct()
    {
        if (vcvenv('VCV_FT_ACTIVATION_REDESIGN')) {
            $this->templatePath = null; // Empty page, logic in js
        }
        $this->addEvent(
            'vcv:inited',
            function (Token $tokenHelper, Request $requestHelper) {
                if (!$tokenHelper->isSiteAuthorized()) {
                    /** @see \VisualComposer\Modules\Account\Pages\ActivationPage::addPage */
                    $this->addFilter(
                        'vcv:settings:getPages',
                        'addPage',
                        20
                    );
                } elseif ($requestHelper->input('page') === $this->getSlug()) {
                    $aboutPage = vcapp('SettingsPagesAbout');
                    wp_redirect(admin_url('admin.php?page=' . rawurlencode($aboutPage->getSlug())));
                    exit;
                }
            }
        );
    }

    /**
     *
     */
    protected function beforeRender()
    {
        if (vcvenv('VCV_FT_ACTIVATION_REDESIGN')) {
            wp_enqueue_script('vcv:wpactivation:script');
            wp_enqueue_style('vcv:wpactivation:style');
        } else {
            wp_enqueue_script('vcv:settings:script');
            wp_enqueue_style('vcv:settings:style');
        }
    }

    /**
     * @param array $pages
     * @param \VisualComposer\Helpers\Url $urlHelper
     *
     * @return array
     */
    protected function addPage($pages, Url $urlHelper)
    {
        if (vcvenv('VCV_FT_ACTIVATION_REDESIGN')) {
            wp_register_script(
                'vcv:wpactivation:script',
                $urlHelper->assetUrl('dist/wpactivation.bundle.js'),
                [],
                VCV_VERSION
            );
            wp_register_style(
                'vcv:wpactivation:style',
                $urlHelper->assetUrl('dist/wpactivation.bundle.css'),
                [],
                VCV_VERSION
            );
        }

        $currentUserAccess = vchelper('AccessCurrentUser');
        if (!$currentUserAccess->wpAll('manage_options')->get()) {
            return $pages;
        }
        $pages[] = [
            'slug' => $this->getSlug(),
            'title' => __('Activation', 'vcwb'),
            'showTab' => false,
            'layout' => 'standalone',
            'controller' => $this,
            'type' => vcvenv('VCV_ENV_ADDONS_ID') !== 'account' ? 'standalone' : 'default',
        ];

        return $pages;
    }

    /**
     * This method overrides by about page
     * @return string
     */
    public function getActivePage()
    {
        return vcfilter('vcv:account:activation:activePage', 'first');
    }
}
